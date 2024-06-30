import mongoose from "mongoose";

const userSchema  = mongoose.Schema(
    {
        id:{type:Number,required:true,unique:true},
        username:{type:String,required:true},
        password:{type:String,required:true},
        verified:{type:Boolean,required:true},
        role:{type:String,required:true,default:"user",enum:["user","admin"]}
    }
    ,
    {
        timestamps:true
    }
)

const userModel = mongoose.model("users", userSchema);
export default userModel;