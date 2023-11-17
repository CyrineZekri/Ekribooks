const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateToken = require('../middleware/authenticationToken');
const roleToken = require('../middleware/roleToken');
const Book = require("../models/book_model");

//authenticated then verify role
 router.use(authenticateToken);
 router.use(roleToken(['rentee']));
 router.get('/', bookController.getAllBooks);
 router.put('/:id', bookController.updateBook); 


module.exports = router;
