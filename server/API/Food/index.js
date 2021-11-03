//Libraries

import express from "express";
//import passport from "passport";


//Database Model
import {FoodModel} from "../../database/allModels";

//validation
import {ValidateRestaurantId,ValidateCategory} from "../../validation/food";


const Router = express.Router();

/*
Route         /
des           get all the foods based on particular restaurant
params        _id
Access        Public
Method        GET
 */
//searching based on restaurants

Router.get("/:_id",async(req,res) => {
    try{
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({foods})
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route         /r
des           get all the foods based on particular restaurant
params        category
Access        Public
Method        GET
 */

//searching based on category
Router.get("/r/:category", async(req,res) => {
    try{

        await ValidateCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({
            category:{ $regex:category,$options:"1" }
        });

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});



export default Router;  