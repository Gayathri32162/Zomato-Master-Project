import mongoose from "mongoose";

//connecting env here
export default async () => {
    return mongoose.connect(process.env.MONGO_URL,{
    
    });

}