import mongoose from "mongoose";

const billSchema = mongoose.Schema(
    {
        id : {type:Number,require:true,unique:true},
        customerName:{type:String,required:true},
        totalAmount : {type:Number,required:true},
        tax : {type:Number,required:true},
        subTotal:{type:Number,required:true},
        cartItem:{type:Array,required:true},
        verified : {type:Boolean,required:true},

    },
    {
        timestamps:true
    }
)

const billModel = mongoose.model("bills",billSchema);

export default billModel;