import joi from "joi";

//Validation for signup
export const ValidationSignup = (userData) => {

    const Schema = joi.object({
        fullNameame: joi.string().required().min(3),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:joi.string().min(5),
        address:joi.array().items(joi.object({detail: joi.string(), for: joi.string()})),
        phoneNumber:joi.number()
    });

    return Schema.validateAsync(userData);
};


//Validation for signin
export const ValidationSignin = (userData) => {

    const Schema = joi.object({
        
        email: joi.string().email().required(),
        password:joi.string().min(5).required(),
        
    });

    return Schema.validateAsync(userData);
};