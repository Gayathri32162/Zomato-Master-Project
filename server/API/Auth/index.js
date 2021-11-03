import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();


//Models
import {UserModel} from "../../database/user";

//Validation
import {ValidationSignup,ValidationSignin} from "../../validation/auth";

/* 
Route     /signup
Descrip   Signup with email and password
Params    None
Access    Public
Method    POST
*/

//Router is used to prevent reloading
Router.post("/signup",async(req,res) => {
    try{

        await ValidationSignup(req.body.credentials);
        
        await UserModel.findEmailAndPhone(req.body.credentials);

        //DB
        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth Token
        const token = newUser.generateJwtToken();

        return res.status(200).json({token});

    }catch(error){   
        return res.status(500).json({error:error.message});                   //good practise to always use try and catch

    }

});


/* 
Route     /signin
Descrip   Signin with email and password
Params    None
Access    Public
Method    POST
*/

//Router is used to prevent reloading
Router.post("/signin",async(req,res) => {
    try{

        await ValidationSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword (req.body.credentials);
        
        //JWT Auth Token
        const token = user.generateJwtToken();

        return res.status(200).json({token, status:"success"});

    }catch(error){   
        return res.status(500).json({error:error.message});                   //good practise to always use try and catch

    }

    
/* 
Route     /google
Descrip   Signin with google
Params    None
Access    Public
Method    GET
*/

Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
}));





/* 
Route     /google/callback
Descrip   Signin with google
Params    None
Access    Public
Method    GET
*/

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
(req,res)=>{
    return res.json({token:req.session.passport.user.token});
}
);


});

export default Router;