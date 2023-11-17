const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateToken = require('../middleware/authenticationToken');
const roleToken = require('../middleware/roleToken');

// Authenticated, then verify role
router.use(authenticateToken);
router.use(roleToken(['renter']));

router.get('/', bookController.getMyBooks);
router.post('/create', bookController.createBook);
router.put('/:id', bookController.updateBook); // Add the put route
router.delete('/:id', bookController.deleteBook);
module.exports = router;
