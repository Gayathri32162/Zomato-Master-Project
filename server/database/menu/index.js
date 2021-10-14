import mongoose from "mongoose";


const MenuSchema = new mongoose.Schema({
    menu:[
        {
            name:{type:String,required:true},
            items:[
                {
                    type:mongoose.Types.ObjectId,
                    ref:"Foods"  //refering to food schema
                }
            ]
        }
    ],
    recommended:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods" ,       //refering to food schema
            unique:true
        }
    ]
},


{
    timestamps:true           //to get information about when the datas get updated
}

);

export const MenuModel = mongoose.model("Menus",MenuSchema);