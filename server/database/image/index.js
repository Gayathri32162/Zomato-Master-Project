import mongoose from "mongoose";


const ImageSchema = new mongoose.Schema({
    images:[{
        location:{type:String, required:true}
    }]
},

{
    timestamps:true           //to get information about when the datas get updated
}

);

export const ImageModel = mongoose.model("Images",ImageSchema); 