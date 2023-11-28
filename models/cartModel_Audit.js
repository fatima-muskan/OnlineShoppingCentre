import mongoose from 'mongoose';

const Cart_Audit=new mongoose.Schema({
    previousCart: {
        type: mongoose.Schema.Types.Mixed,
       
        required: true,
    },
    newCart: {
        type: mongoose.Schema.Types.Mixed,
        
        required: true,
    },
},{timestamps:true}
);

export default mongoose.model('Cart_Audit',Cart_Audit);