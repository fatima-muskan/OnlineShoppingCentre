import mongoose from 'mongoose';

const payment_Audit=new mongoose.Schema({
    previousPayment: {
        type: mongoose.Schema.Types.Mixed,
       
        required: true,
    },
    newPayment: {
        type: mongoose.Schema.Types.Mixed,
        
        required: true,
    },
},{timestamps:true}
);

export default mongoose.model('Payment_Audit',payment_Audit);