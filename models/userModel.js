import mongoose, { Mongoose } from 'mongoose';

const userSchema=new Mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        type: String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    role:{
        required:true,
        default:0
    }
},{timestamps:true}
);

export default mongoose.model('users',userSchema)