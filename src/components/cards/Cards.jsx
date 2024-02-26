import React from 'react'
//highlights,ratingNumber,ratingText,stars
import Card from './Card'
import data from './cardData.jsx'
import "./card.scss"
const Cards = () => {

  return (
    
    data.map((item)=>
    {
        return(
        <Card key={item.idx} idx={item.idx} best={item.best} planName={item.planName} topText={item.topText} highlights={item.highlights} ratingNumber={item.ratingNumber} ratingText={item.ratingText} stars={item.stars}/>)

    })

  )
}

export default Cards