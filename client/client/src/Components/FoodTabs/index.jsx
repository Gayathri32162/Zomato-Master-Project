import React,{useState} from "react";
import { useParams,Link } from "react-router-dom";


//Icons
import {RiShoppingBag3Line} from "react-icons/ri";
import {IoFastFoodOutline,IoNutritionOutline} from "react-icons/io5";
import {BiDrink} from "react-icons/bi";


function MobileTabs() {

    const [allTypes, setAllTypes] = useState([
        {
            id:'delivery',
            icon:<RiShoppingBag3Line/>,
            name:'Delivery',
        },
        {
            id:'dining',
            icon:<IoFastFoodOutline/>,
            name:'Dining Out',
        },
        {
            id:'night',
            icon:<BiDrink/>,
            name:'Night Life',
        },
        {
            id:'nutri',
            icon:<IoNutritionOutline/>,
            name:'Nutrition',
        }
    ]);

    const {type} = useParams();



    return (
    <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
            {allTypes.map((items) => (
                <Link to={`/${items.id}`}>
                    <div className={
                        type === items.id ? "flex flex-col relative items-center text-xl text-zomato-400" : "flex flex-col text-xl"
                    }></div>
                </Link>
            ))}
        </div>   
    </>
    );
};

function LargeTabs() {
    return <></>;
}


function FoodTab(){
    return(
        <>
            <MobileTabs/>
            <LargeTabs/>
        </>
    )

}

export default FoodTab;