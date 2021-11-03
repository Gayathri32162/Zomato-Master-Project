import express from "express";


import {RestaurantModel} from "../../database/allModels";


//validation 
import {ValidateRestaurantCity,ValidateRestaurantSearchString} from "../../validation/restaurant";
import {ValidateRestaurantId} from "../../validation/food";
const Router = express.Router();

/*
Route         /
des           get all restaurants details on city
params        None
Access        Public
Method        GET
 */

Router.get("/",async(req,res) => {
    try{
        await ValidateRestaurantCity(req.query);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});


/*
Route         /
des           get particular restaurants details on id
params        _id
Access        Public
Method        GET
 */

Router.get("/:_id", async(req,res) => {
    try{
        const{_id} = req.params;
        const restaurant = await RestaurantModel .findOne(_id);

        if(!restaurant)
        return res.status(404).json({error:"Restaurant not found"});

        return res.json({restaurant});


    }catch(error){
        return res.status(500).json({error:"error.message"});

    }
});



/*
Route         /
des           get  restaurants details on search
params        none
Body          search string
Access        Public
Method        GET
 */

Router.get("/search",async(req,res) =>{
    try{

        await ValidateRestaurantSearchString(req.body);


        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({

            name:{$regex:searchString,$options:"i"},    //regex,capital insensitive
        });
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});


export default Router;