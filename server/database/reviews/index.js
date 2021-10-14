import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    food:{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
        required:true       
    },
    restaurant:{
        type:mongoose.Types.ObjectId,ref:"Restaurants"},
        user:{type:mongoose.Types.ObjectId,ref:"Users"},
        ratings:{type:Number,required:true},
        reviewText:{type:String,required:true},
        photos:[{
            type:mongoose.Types.ObjectId,
            ref:"Images"
        }]
    
},

{
    timestamps:true           //to get information about when the datas get updated
}


);



export const ReviewModel = mongoose.model("Reviews",ReviewSchema);