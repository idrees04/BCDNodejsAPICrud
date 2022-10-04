import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema  = new Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
})

export default mongoose.model('User',userSchema);