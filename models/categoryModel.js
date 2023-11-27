import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    isActive:{
        type:Number,
        default:1,
    }
},{timestamps:true}
)

export default mongoose.model('Category',categorySchema);