//const express = require("express");it is es5 format but in react we will be using es6 but it will be automatically converted into machine language es5 by babel

//env variable
require("dotenv").config();



import express from "express";
import cors from "cors";
import helmet from "helmet";


//API
import Auth from "./API/Auth";


//database connection
import ConnectDB from "./database/connection"



const zomato = express();//initializing with express

//letting zomato to use cors and helmet
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));//this is default setup of express
zomato.use(cors());
zomato.use(helmet());

//For Application Routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);


//root route
zomato.get("/",(req,res) => res.json({message:"setup successfull yay!"}));


zomato.listen(4000, ()=> 
        ConnectDB().then(()=>console.log("server is up and run"))
        .catch(()=>console.log("DB connection failed"))                   //when database is connected to server it will run
        
);