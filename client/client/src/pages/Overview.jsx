import React,{useState} from 'react'
import {Link,useParams} from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";


//Components
import {NextArrow,PrevArrow} from "../Components/CarouselArrows";

import MenuCollections from '../Components/Restaurant/MenuCollections';

function Overview() {

    const {id} = useParams();

    const [menuImage,setMenuImage] = useState([
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    ]);
    const [Reviews,setReviews] = useState([]);

    const cuisins = ["Indian", "Asian", "Italian"];
    const averageCost = 100;

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    const settings={
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:4,
        initialSlide:0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:false,
                    dots:true
                }
                },
                {
                    breakpoint:600,
                    settings:{
                        slidesToShow:2,
                        slidesToScroll:2, 
                    }                      
                    },
                    {
                        breakpoint:480,
                        settings:{
                            slidesToShow:1,
                            slidesToScroll:1,                           
                        },
            },
        ],
    };
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright/>
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollections menuTitle="menu" pages="3" image={menuImage}/>
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisins</h4>
                    <div className="flex flex-wrap gap-2">
                        {cuisins.map(data =>(
                            <span className="border border-gray-600 text-gray-600 px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium ">Average Cost</h4>
                        <h6>${averageCost}for one order(approx.)</h6>
                        <small className='text-gray-500'>
                            Exclusive of application taxes and services charges, if any
                        </small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <div>
                            <Slider {...settings}>{/*Components to render*/}</Slider>
                        </div>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Rate your delivery experience
                        </h4>
                        <ReactStars 
                        count={5} 
                        onChange={ratingChanged} 
                        size={24} 
                        activeColor="#ffd700"
                        />
                        {/*Components to render*/}
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        ...Map stuff
                    </div>
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex md:w-4/12 sticky rounded-xl tap-2 bg-white p-3 shadow-md flex-col gap-4">
                    ...Map Stuff
                </aside>
            </div>
        </>
    )
}

export default Overview
