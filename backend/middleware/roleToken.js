const asyncHandler = require('express-async-handler');
const User = require('../models/user_model'); // Import your User model or access your database in an appropriate way

const roleToken = (requiredRoles) => {
    return asyncHandler(async (req, res, next) => {
        const userId = req.user.id;

        try {
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const userRole = user.role;

            if (requiredRoles.includes(userRole)) {
                return next();
            }

            res.status(403).json({ message: 'Access Forbidden - Insufficient permissions' });
        } catch (error) {
            console.error('Error in roleToken middleware:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });
};

module.exports = roleToken;