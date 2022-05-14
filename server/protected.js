const jwt = require("jsonwebtoken")
const User = require("./models/User")

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);   

    const user = await User.findById(decoded.id);

    req.user = user

    next()
  } catch (err) {
    res.status(400).json({
      success: false,
      data: "Invalid"
    })
    return (console.log(err.message))
  }
}