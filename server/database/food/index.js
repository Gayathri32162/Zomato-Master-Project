import mongoose from "mongoose";


const FoodSchema = new mongoose.schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    isVeg:{type:Boolean,required:true},
    isContainEgg:{type:Boolean,required:true},
    category:{type:String,required:true},
    photos:{
        type:mongoose.Types.ObjectId, //connecting referenced key with referencing key
        ref:"Images"
    },
    price:{type:Number, default:150, required:true},
    addOns:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods"       //self referncing
        }
    ],
    restaurants:{
        type:mongoose.Types.ObjectId,
        ref:"Restaurants",
        required:true
    }
},

{
    timestamps:true           //to get information about when the datas get updated
}

);

export const FoodModel = mongoose.model("Foods",FoodSchema);
