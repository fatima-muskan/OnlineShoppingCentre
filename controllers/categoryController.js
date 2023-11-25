
import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import categoryModel_Audit from "../models/categoryModel_Audit.js";

// Create Category Controller
export const createCategoryController= async(req,res)=>{
    try {
        const {name}=req.body
        if(!name){
            return res.status(400).json({message:'Name is required'})
        }
        const existingCategory=await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({success:true,message:'Category already exists'})
        }
        const category=await new categoryModel({name,slug:slugify(name)}).save();
        res.status(201).send({
            success:true,
            message:'Category created',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Creating Category',
            error
        })
    }
};

// Update category Controller
export const updateCategoryController = async(req,res) =>{
    try {
        const {name}=req.body
        const {id}=req.params
        const oldCategory = await categoryModel.findById(id);
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        
        // Adding in Audit Table
        const new_name=name
        const prev_name=oldCategory.name;
        const oldSlug=oldCategory.slug;
        const category_audit=await new categoryModel_Audit({prev_name,new_name,prev_slug:slugify(oldSlug),new_slug:slugify(name)}).save();
        
        res.status(200).send({
            success:true,
            message:'Category Updated Successfully',
            category,
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error updating category'
        })
    }
}

export const categoryController = async( req,res) =>{
    try {
        const category=await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:'All Categories List',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error getting all category'
        })
    }
}