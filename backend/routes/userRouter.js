import express from 'express';
import { register, login, logout, getUser, updateProfile, updatePassword } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js'; // Import the authentication middleware

const router = express.Router();

// Registration and login routes do not require authentication
router.post('/register', register);
router.post('/login', login);

// Routes that require authentication
router.get('/logout', isAuthenticated, logout); // Ensure user is authenticated before allowing logout
router.get('/getuser', isAuthenticated, getUser); // Ensure user is authenticated before fetching user info
router.put('/update/profile', isAuthenticated, updateProfile); // Ensure user is authenticated before updating profile
router.put('/update/password', isAuthenticated, updatePassword); // Ensure user is authenticated before updating password

export default router;

