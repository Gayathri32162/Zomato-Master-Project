import express from "express";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route         /new
des           add new review
params        none
Body          Review Object
Access        Public
Method        POST
 */

Router.post("/new",async(req,res) =>{
    try{
        const { revieData } = req.body;

        await ReviewModel.create(revieData);
        return res.json({review: "Successfully created review"});

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});


/*
Route         /delete
des           delete a review
params        _id
Access        Public
Method        Delete
 */

Router.delete("/delete/:_id",async(req,res) =>{
    try{
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review: "Successfully deleted"});

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

 export default Router;