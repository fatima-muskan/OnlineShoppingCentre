import mongoose from "mongoose";

const categorySchema_audit = await new mongoose.Schema({
    previousCategory: {
        type: mongoose.Schema.Types.Mixed, // Store the entire previous category object
        required: true,
    },
    newCategory: {
        type: mongoose.Schema.Types.Mixed, // Store the entire new category object
        required: true,
    },
},{timestamps:true}
)

export default mongoose.model('Category_Audit',categorySchema_audit);