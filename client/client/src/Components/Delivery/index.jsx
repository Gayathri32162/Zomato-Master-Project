import React,{useState} from 'react'
import RestaurantCard from '../RestaurantCard'
import DeliveryCarousal from './DeliveryCarousal'

function Delivery() {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id:"12345",
            photos:[
                ""
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakkery","Desserts"],
            isPro:false,
            isOff:true,
            durationOfdelivery:47,
            restaurantReviewValue:4.1,
            averageCost:"$20",
        },
        {
            _id:"1230453",
            photos:[
                ""
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakkery","Desserts"],
            isPro:false,
            isOff:true,
            durationOfdelivery:47,
            restaurantReviewValue:4.1,
            averageCost:"$20",
        },
        {
            _id:"1238676",
            photos:[
                ""
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakkery","Desserts"],
            isPro:false,
            isOff:true,
            durationOfdelivery:47,
            restaurantReviewValue:4.1,
            averageCost:"$20",
        },
    ]);


    return (
        <>
        <DeliveryCarousal/>
        <div className="flex justify-between flex-wrap my-10">
            {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id}/>
            ))}
        </div>
        </>
    );
}

export default Delivery
