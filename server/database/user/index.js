import bcrypt from "bcryptjs/dist/bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


//creating schema
const UserSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String},
    address:[{detail:{type:String}, for:{type:String}}],
    phoneNumber:[{type:Number}],
},


{
    timestamps:true           //to get information about when the datas get updated
});


UserSchema.methods.generateJwtToken = function(){
    return jwt.sign({user:this._id.toString()},"ZomatoApp");
}

//STATICS FOR SIGNUP
UserSchema.statics.findEmailAndPhone = async ({email,phoneNumber})=>
{
    //Check whether email or phone number exists already
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already exists");
    }
    return false;
};


//STATICS FOR SIGNIN
UserSchema.statics.findByEmailAndPassword = async ({email,password})=>
{
    //Check whether email  exists already
    const user = await UserModel.findOne({email});
    if(!user) throw new Error("user doesn't exists");

    //compare password 
    const doesPasswordMatch = await bcrypt.compare(password,user.password);
    if(doesPasswordMatch){
        throw new Error("invalid password");
    }
    return user;
};



UserSchema.pre("save",function(next){
    const user = this;
    
    if(!user.isModified("password")) return next(); //if the user didnt modify the password
    

    //generating bcrypt salt
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);

        //hashing the password
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error);

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});


//exporting schema
export const UserModel = mongoose.model("Users", UserSchema);