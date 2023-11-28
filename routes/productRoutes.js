import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController,getProductController,getSingleProductController, productPhotoController,deleteProductController, updateProductController, productFiltersController, productCountController,productListController } from '../controllers/productController.js';
import formidable from 'express-formidable';
const router=express.Router()

// Create Product
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)
// Get all Products
router.get('/get-product', getProductController)
// Get Single Product
router.get('/get-product/:slug', getSingleProductController)
// Get Photo
router.get('/product-photo/:pid',productPhotoController)
// Delete Product
router.put('/delete-product/:pid',deleteProductController)
// update Product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)
// Filter Product
router.post('/product-filters', productFiltersController)
// Product count
router.get('/product-count', productCountController)
// Product Per Page
router.get('/product-list/:page', productListController)
export default router