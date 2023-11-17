const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please add name"]

  },
  email: {
    type: String,
    required: [true, "please add name"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "please add password"],
  },
  role: {
    type: String,
    required: true,
    enum: ['renter', 'rentee']
  }
}, {
  timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;
