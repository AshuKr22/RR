import React from 'react'
import image from "./wix.png"
import "./smallCards.scss"
const SmallCrd = () => {
  return (
    <div className='small-card'>
        <div><img src={image} alt="" /></div>
        <div className='offer-tags'>
        <span>20% Off</span>
        <span>Limited time </span>
        </div>
        <h2>Webbuilder 1</h2>
        <h3>Computer  Modern clasic with wix support</h3>
        <div className='prices'>
            <h1>$39.96</h1>
            <span className='size-2'>$49.96</span>
            <span className='size-3'>(20% Off)</span>
        </div>
        <button>View Deal</button>
    </div>
  )
}

export default SmallCrd;