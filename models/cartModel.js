import mongoose from 'mongoose';

const cartSchema=new mongoose.Schema({
    user_ID:{
        type: mongoose.ObjectId,
        ref:'Users', // Reference to the Users model
        required:true,
    },
    product_ID:{
        type:mongoose.ObjectId,
        ref:'Products', // Reference to the Products model
        required:true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    totalPrice:{
        type:Number,
        require:true,
    },
    isActive:{
        type:Number,
        default:1,
    },
},{timestamps:true}
);

export default mongoose.model('Cart',cartSchema);