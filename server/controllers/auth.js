const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  const usernameUsed = await User.findOne({username})
  if (usernameUsed) {
    return (res.send("Username already taken, try being creative for once"))    
  }

  const emailUsed = await User.findOne({email})
  if (emailUsed) {
    return (res.send("Email already in use"))    
  }

  try {
    const user = await User.create({
      username, email, password
    });

    return (sendToken(user, 201, res))
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
};

exports.login = async (req, res, next) => {
  const { email, password} = req.body;

  if (!email || !password) {
    res.status(400).json({success: false, error: "Enter your email and password"})
  }

  try {
    const user = await User.findOne({email}).select("+password");

    if (!user) {
      return (res.status(404).json({success: false, error: "Nah bro try again"}))
    }

    const isMatch = await user.matchPasswords(password);

    if(!isMatch) {
      return (res.status(404).json({success: false, error: "nah bro try again"}))
    }

    return (sendToken(user, 200, res));
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({success: true, token})
}