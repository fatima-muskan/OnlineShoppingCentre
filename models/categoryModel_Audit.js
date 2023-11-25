import mongoose from "mongoose";

const categorySchema_audit = await new mongoose.Schema({
    prev_name:{
        type:String,
        
    },
    new_name:{
        type:String,
        
    },
    prev_slug:{
        type:String,
        
    },
    new_slug:{
        type:String,
        
    }
},{timestamps:true}
)

export default mongoose.model('Category_Audit',categorySchema_audit);