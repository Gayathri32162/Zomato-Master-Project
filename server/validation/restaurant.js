import joi from "joi";

//Validation for city
export const ValidateRestaurantCity = (restaurantobj) => {

    const Schema = joi.object({
       city: joi.string.required()

    });

    return Schema.validateAsync(restaurantobj);
};



//Validation for search
export const ValidateRestaurantSearchString = (restaurantobj) => {

    const Schema = joi.object({
       searchString: joi.string.required()

    });

    return Schema.validateAsync(restaurantobj);
};


