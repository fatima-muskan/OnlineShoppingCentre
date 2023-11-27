import mongoose from 'mongoose';

const productSchema_Audit=new mongoose.Schema({
    previousProduct: {
        type: mongoose.Schema.Types.Mixed,
       
        required: true,
    },
    newProduct: {
        type: mongoose.Schema.Types.Mixed,
        
        required: true,
    },
},{timestamps:true}
);

export default mongoose.model('Products_Audit',productSchema_Audit);