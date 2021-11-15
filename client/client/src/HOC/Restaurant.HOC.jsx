import React,{ Component }  from "react";
import {Route} from "react-router-dom";


//Layout
import RestaurantLayout from "../Layout/Restaurant.Layout"


const RestaurantLayoutHOC = ({component: Component,...rest}) =>{
    return (
        <>
        <Route {...rest} component={(props) => (
            <RestaurantLayout>
                <Component {...rest}/>
            </RestaurantLayout>
        )}/>
        </>
    );
};

export default RestaurantLayoutHOC;