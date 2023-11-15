import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

// routing
// Register
router.post('/register', registerController);

// Login
router.post('/login',loginController);

// test router
router.get('/test', requireSignIn, isAdmin, testController);
export default router;