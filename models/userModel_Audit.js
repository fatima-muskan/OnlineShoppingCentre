import mongoose from 'mongoose';

const User_Audit=new mongoose.Schema({
    previousUser: {
        type: mongoose.Schema.Types.Mixed,
       
        required: true,
    },
    newUser: {
        type: mongoose.Schema.Types.Mixed,
        
        required: true,
    },
},{timestamps:true}
);

export default mongoose.model('Users_Audit',User_Audit);