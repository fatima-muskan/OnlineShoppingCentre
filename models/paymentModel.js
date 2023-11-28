import mongoose from 'mongoose';

const paymentSchema=new mongoose.Schema({
    user_ID:{
        type: mongoose.ObjectId,
        ref:'Users', // Reference to the Users model
        required:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    paymentMethod:{
        type:String,
        require:true,
    },
    isActive:{
        type:Number,
        default:1,
    },
},{timestamps:true}
);

export default mongoose.model('Payments',paymentSchema);