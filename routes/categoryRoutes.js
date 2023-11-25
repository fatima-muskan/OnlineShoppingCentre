import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createCategoryController, updateCategoryController, categoryController } from '../controllers/categoryController.js';

const router=express.Router()
// Add Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)
// Update Category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)
// Get All Category
router.get('/get-category', categoryController)

export default router;