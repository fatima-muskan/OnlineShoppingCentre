import mongoose from 'mongoose';

const productSchema_Audit=new mongoose.Schema({
    new_name:{
        type: String,
        required:true,
    },
    new_slug:{
        type:String,
        required:true,
    },
    new_description:{
        type:String,
        required: true
    },
    new_price:{
        type: Number,
        required:true,
    },
    new_category:{
        type:mongoose.ObjectId,
        ref:'Category',
        require:true,
    },
    new_quantity:{
        type:Number,
        required:true,
    },
    new_photo:{
        data: Buffer,
        contentType:String,
    },
    new_shipping:{
        type:Boolean,
    },
    new_isActive:{
        type:Number,
        default:1,
    },
    prev_name:{
        type: String,
        required:true,
    },
    prev_slug:{
        type:String,
        required:true,
    },
    prev_description:{
        type:String,
        required: true
    },
    prev_price:{
        type: Number,
        required:true,
    },
    prev_category:{
        type:mongoose.ObjectId,
        ref:'Category',
        require:true,
    },
    prev_quantity:{
        type:Number,
        required:true,
    },
    prev_photo:{
        data: Buffer,
        contentType:String,
    },
    prev_shipping:{
        type:Boolean,
    },
    prev_isActive:{
        type:Number,
        default:1,
    },
},{timestamps:true}
);

export default mongoose.model('Products_Audit',productSchema_Audit);