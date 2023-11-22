import express from 'express';
import {registerController,loginController,testController, forgotPasswordController} from '../controllers/authController.js';
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

// Forgot Password Route
router.post('/forgot-password', forgotPasswordController);

// protected User Route
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok: true});
});

// protected Admin Route
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ok: true});
});


export default router;