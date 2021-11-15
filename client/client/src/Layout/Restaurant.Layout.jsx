import React,{useState} from 'react'

//Components
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import {BiBookmarkPlus} from "react-icons/bi"
import Tabs from '../Components/Restaurant/Tabs';

function RestaurantLayout({children}) {
    const[restaurant,setRestaurant] =useState({
            images:[
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            ],
            name:"gaya",
            cuisine:"jsdhujf",
            address:"dgrfgswd",
            restaurantRating:"4.3", 
            deliveryRating:"3.5",
    });
    return (
        <>
            <RestaurantNavbar/>
            <div className="container mx-auto px-4 py-4 lg:px-20 pb-10">
                <ImageGrid images={restaurant.images}/>
                <RestaurantInfo 
            name={restaurant?.name} 
            restaurantRating={restaurant?.restaurantRating || 0} 
            deliveryRating={restaurant?.deliveryRating || 0} 
            cuisine={restaurant?.cuisine } 
            address={restaurant?.address} 
            />
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                    <TiStarOutline/>Add Review
                </InfoButtons>
                <InfoButtons>
                    <RiDirectionLine/>Direction
                </InfoButtons>
                <InfoButtons>
                    <BiBookmarkPlus/> BookMark
                </InfoButtons>
                <InfoButtons>
                    <RiShareForwardLine/>Share
                </InfoButtons>
            </div>
            <div className="my-10">
                <Tabs/>
            </div>
            {children}
            </div>          
            
        </>
    )
}

export default RestaurantLayout;
