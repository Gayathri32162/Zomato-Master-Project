import React from 'react'

function NutritionHeroCarouselCard(props) {
    return (
        <div className="w-full ">
            <img src={props.image} 
            className="w-full h-full"
            alt="medicine"
            />
        </div>
    )
}

export default NutritionHeroCarouselCard
