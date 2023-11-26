import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController } from '../controllers/categoryController.js';

const router=express.Router()
// Add Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)
// Update Category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)
// Get All Category
router.get('/get-category', categoryController)
// Single Category
router.get('/single-category/:slug',singleCategoryController)
// Delete Catgory
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
export default router;