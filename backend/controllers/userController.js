
const asyncHandler = require("express-async-handler");
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

///////////////////register/////////////////////////////////
const registerUser = asyncHandler(async (req, res) => {
  console.log("registred");
  const { username, email, password, role } = req.body;
  //checking for mandatory fields.
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  //role validation
  if (!['renter', 'rentee'].includes(role)) {
    res.status(400).json({ message: "Invalid role" });
  }

  //email exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({ message: "Email used" });

  }
  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  //create the User
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role
  })
  if (user) {
    res.status(201).json({ _id: user._id, username: user.username, email: user.email, role: user.role });
  }
  else {
    res.status(400).json({ message: "User not created" });
  }
});

///////////////////  login  /////////////////////////////////

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are mandatory!" });

  }
  //check if user mawjoud 
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          role: user.rol
        }
      },

      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "700m" }
    );
    res.status(200).json({ accessToken, role: user.role }); // Return role in response
  } else {
    return res.status(401).json({ message: "Email or password not valid" });

  }
});

///////////////////  Current  /////////////////////////////////
//get the current user's info
const currentUser = asyncHandler(async (req, res) => {
  if (!req.user) {//to se if req.user object is created aka it is authenticated 
    return res.status(401).json({ message: "Not authenticated" });
  }
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});
module.exports = { registerUser, loginUser, currentUser }