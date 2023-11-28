import mongoose from 'mongoose';

const errorLogSchema = new mongoose.Schema({
    errorMessage: {
        type: String,
        required: true,
    },
    errorDetails: {
        type: String,
    },
    stackTrace: {
        type: String,
    },
},{timestamps:true}
);

export default mongoose.model('PaymentLog', errorLogSchema);
