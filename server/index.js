//const express = require("express");it is es5 format but in react we will be using es6 but it will be automatically converted into machine language es5 by babel

//env variable
require("dotenv").config();



import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//confif
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";


//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from  "./API/Orders";
import Review from "./API/Reviews";



//database connection
import ConnectDB from "./database/connection";



const zomato = express();//initializing with express

//letting zomato to use cors and helmet
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));//this is default setup of express
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);



//For Application Routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Review);



//root route
zomato.get("/",(req,res) => res.json({message:"setup successfull yay!"}));


zomato.listen(4000, ()=> 
        ConnectDB().then(()=>console.log("server is up and run"))
        .catch(()=>console.log("DB connection failed"))                   //when database is connected to server it will run
        
);
