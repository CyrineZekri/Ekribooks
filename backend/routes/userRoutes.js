const express = require('express');
const router = express.Router();
const { loginUser, registerUser, currentUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticationToken');

// Register 
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/current", authenticateToken, currentUser);
module.exports = router;
