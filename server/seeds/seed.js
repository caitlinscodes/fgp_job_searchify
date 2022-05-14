const db = require('mongoose');
const User = require('../models/User')

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/job.searchifyDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Mongo Connection Open');
// }).catch((err) => {
//   console.log(err);
// });

const seedUsers = [
  {
    username: 'Inna_Arabejo',
    email: 'inna@email.com',
    password: 'password1'
  },
  {
    username: 'Matt_Jackson',
    email: 'matt@email.com',
    password: 'password2'
  },
  {
    username: 'Jonathan_Johnson',
    email: 'jonathan@email.com',
    password: 'password3'
  },
  {
    username: 'Caitlin_Stevenson',
    email: 'caitlin@email.com',
    password: 'password4'
  }
];

const seedUserDB = async () => {
  await User.insertMany(seedUsers);
}

seedUserDB().then(() => {
  db.close();
})