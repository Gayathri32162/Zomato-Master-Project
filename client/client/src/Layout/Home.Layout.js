import React from "react";


//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTabs";

const HomeLayout = (props) => {
    return <>

    <div className="container mx-auto  lg:px-20">
        <Navbar />
        <FoodTab />
    {props.children}
    </div>
    
    </>
}

export default HomeLayout;