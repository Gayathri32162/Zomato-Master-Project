import express from "express";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();
import passport from "passport";

/*
Route         /
des           get all orders based on id
params        _id
Access        Public
Method        GET
 */


 Router.get("/:_id",passport.authenticate("jwt", {session:false}), async(req,res) =>{
     try{
         const { _id } = req.params;
         const getOrders = await OrderModel.findOne({ user: _id });
         if(!getOrder){
             return res.status(404).json({error: error.message});
         }
     }catch(error){
         return res.status(500).json({error:error.message});

     }
 });


 /*
Route         /new
des           Add new order
params        _id
Access        Public
Method        POST
 */

Router.post("/new/:_id",async(req,res) =>{
    try{
        const {_id} = req.params;
        const {orderDetails} = req.body;
        const addNewUser = await OrderModel.findOneAndUpdate(
            {
                user:_id
            },
            {
                $push:{orderDetails: orderDetails}  //$push mongoDB operator
            },
            {
                new: true   //if it is new order
            }
        );
        return res.json({order: addNewUser});

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

 export default Router;