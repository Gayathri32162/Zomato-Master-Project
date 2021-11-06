import React from "react";
import {useParams} from "react-router-dom";
import Brand from "./Delivery/Brand";
import Delivery from "./Delivery/index";

const Temp = () => {
    const {type} = useParams();
    return(
        <>
        <div className="my-5">
            {type === "delivery" && <Brand/>}
            {type === "delivery" && <Delivery />}
            
        </div>
        </>
    );
};

export default Temp;