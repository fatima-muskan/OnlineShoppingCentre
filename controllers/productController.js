import productModel from "../models/productModel.js"
import fs from 'fs'
import slugify from "slugify"
import productModel_audit from "../models/productModel_audit.js";

export const createProductController = async(req,res) =>{
    try {
        const {name,slug,description,price,category,quantity,shipping,isActive}=req.fields;
        const {photo} = req.files;
        if(!name){
            res.status(500).send({error:'Name is required'})
        }
        
        if(!description){
            res.status(500).send({error:'description is required'})
        }
        if(!price){
            res.status(500).send({error:'price is required'})

        }
        if(!category){
            res.status(500).send({error:'category is required'})
        }
        if(!quantity){
            res.status(500).send({error:'quantity is required'})
        }
        
        if(photo && photo.size>1000000){
            res.status(500).send({error:'Photo is required ad should be less than 1mb'})
        }
        const products=new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            products.photo.data=fs.readFileSync(photo.path)
            products.photo.contentType=photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message:'Products Created Successfully',
            products,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in creating product',
            error
        })
    }
}

// Get all products
export const getProductController = async(req,res)=>{
    try {
        const products = await productModel.find({ isActive: 1 }).populate('category').select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(201).send({
            success:true,
            message:'Products Getted Successfully',
            total:products.length,
            products,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting product',
            error:error.message
        })
    }
}

// Get Single Product
export const getSingleProductController = async(req,res) => {
    try {
        const product=await productModel.findOne({slug:req.params.slug,isActive: 1 }).select('-photo').populate('category')
        res.status(201).send({
            success:true,
            message:'Single Products Getted Successfully',
            product,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting Single product',
            error:error.message
        })
    }
}

// Get Product Photo
export const productPhotoController = async(req,res) => {
    try {
        const product_Photo=await productModel.findById(req.params.pid).select('photo');
        if(product_Photo.photo.data){
            res.set('Content-type',product_Photo.photo.contentType)
            return res.status(200).send(product_Photo.photo.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting product Photo',
            error:error.message
        })
    }
}

// Delete Product
export const deleteProductController=async(req,res)=>{
    try {
        const product = await productModel.findByIdAndUpdate(
            req.params.pid,
            { $set: { isActive: 0 } },
            { new: true }
        );
        if (product) {
            console.log("Product deactivated successfully:", product);
            // Additional logic if needed
            res.status(200).json({
                success: true,
                message: "Product deactivated successfully",
                product,
            });
        } else {
            console.log("Product not found");
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in deleting product',
            error:error.message
        })
    }
}

// Update Product
export const updateProductController = async(req,res) =>{
    try {
        const {name,slug,description,price,category,quantity,shipping,isActive}=req.fields;
        const {photo} = req.files;
        if(!name){
            res.status(500).send({error:'Name is required'})
        }
        
        if(!description){
            res.status(500).send({error:'description is required'})
        }
        if(!price){
            res.status(500).send({error:'price is required'})

        }
        if(!category){
            res.status(500).send({error:'category is required'})
        }
        if(!quantity){
            res.status(500).send({error:'quantity is required'})
        }
        if(photo && photo.size>1000000){
            res.status(500).send({error:'Photo is required ad should be less than 1mb'})
        }
        // Audit Table
        const previousProduct=await productModel.findById(req.params.pid)
        const updatedProduct=await productModel.findByIdAndUpdate(req.params.pid,{...req.fields, slug:slugify(name)},{new:true})
        if(photo){
            updatedProduct.photo.data=fs.readFileSync(photo.path)
            updatedProduct.photo.contentType=photo.type
        }
        await updatedProduct.save()

        const productAuditRecord = new productModel_audit({
            previousProduct: previousProduct.toObject(),
            newProduct: updatedProduct.toObject(),
        });
        //console.log(prev_photo,new_name,new_slug,new_description,new_price,new_category,new_quantity,new_shipping,new_isActive,prev_name,prev_slug,prev_description,prev_price,prev_category,prev_quantity,prev_shipping,prev_isActive)
        //if(prev_photo){
        //    products_Audit.prev_photo.data=fs.readFileSync(prev_photo.path)
        //    products_Audit.prev_photo.contentType=prev_photo.type
        //}
        
        await productAuditRecord.save()

        res.status(201).send({
            success:true,
            message:'Products updated Successfully',
            updatedProduct,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in updating product',
            error
        })
    }
}
