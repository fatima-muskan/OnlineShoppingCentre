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
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('UsersLog', errorLogSchema);
