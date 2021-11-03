import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    mapLocations:{type:String,required:true},
    cuisine:[String],
    restaurantTimings:String,
    contactNumber:{type:Number,required:true},
    website:String,
    popularDishes:[String],
    averageCost:Number,
    amenities:[String],
    menuImages:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    },
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"Menus"
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:"Reviews"
    }],
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    }
},


{
    timestamps:true           //to get information about when the datas get updated
}

);

export const RestaurantModel = mongoose.model("Restaurants",RestaurantSchema);
