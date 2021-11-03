//Libraries
require('dotenv').config();
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";//multer is for uploading files to server 

//Database Model
import { ImageModel } from "../../database/allModels";


//utilities
import { s3Upload } from "../../Utilities/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});



/* 
Route     /
Descrip   uploading given image to s3 bucket , and then saving the file to mongoDB
Params    None
Access    Public
Method    GET
*/

//here we want to upload a file to AWS 
Router.post("/", upload.single("file"),async(req,res) => {
    try{
        const file = req.file;

        //S3 bucket options
        const bucketOptions = {

            Bucket:"zomatomastershapeai123",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            ACL:"public-read"  //access control list
            };

            const uploadImage = await s3Upload(bucketOptions);

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

export default Router;