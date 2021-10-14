import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    },
    orderDetails:[
        {
            food:{
                type:mongoose.Types.ObjectId,
                ref:"Foods"
            },
            quantity:{type:Number,required:true},
            paymentmode:{type:String,required:true},
            status:{type:String,default:"placed"},
            paymentDetails:{
                itemTotal:{type:String,required:true},
                promo:{type:Number,required:true},
                tax:{type:Number,required:true},
            }
        }
    ],
    orderRatings:{
        type:Number,required:true
    }
},


{
    timestamps:true           //to get information about when the datas get updated
}

);


export const OrderModel = mongoose.model("Order",OrderSchema);