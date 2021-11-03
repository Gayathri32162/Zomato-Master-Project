import googleOAuth from "passport-google-oauth20";

import {UserModel} from "../database/allModels";
require("dotenv").config();


//Authentication strategy

const GoogleStrategy = googleOAuth.Strategy;

export default(passport) => {
    passport.use(
        new GoogleStrategy({
            clientID:"337909987507-8kh8pg59bni15scsv2liqojobpp7ij66.apps.googleusercontent.com",
            ClientSecret:"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",
            CallBackURL:"http://localhost:4000/auth/google/callback"
        },
        async(accessToken, refreshToken, profile, done)=>{
            //creating a new user
            const newUser = {
                fullName:profile.displayName,
                email:profile.emails[0].value,
                profilePic:profile.photos[0].value
            };
            try{
                //check user exists or not
                const user=await UserModel.findOne({email:newUser.email});
                
                if(user){

                    //generating token
                const token = user.generateJwtToken();
                    //return user
                    done(null,{user,token});

                }
                else{
                    //creating new user 
                    const user=await UserModel.create(newUser);

                    //generating token
                const token = user.generateJwtToken();

                    //return user
                    done(null,{user,token});
                }
            }
            catch(error){
                done(error,null);
            }
        }
        )
    );

    passport.serializeUser((userData,done) => done(null,{...userData}));
    passport.deserializeUser((id,done) => done(null,id));
};
