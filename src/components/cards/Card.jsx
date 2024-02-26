import React from 'react'
import image from "./wix.png"
import { IoIosArrowDown } from "react-icons/io";
import diamond from "./diamond.svg"
import trophy from "./trophy.svg"
import "./card.scss"
import { StarsRating } from './StarsRating';

const Card = ({idx,best,planName,topText,highlights,ratingNumber,ratingText,stars}) => 
{
    

    
    let icon;
    if(best=="Best Value")
    {
        icon= diamond

    }
    else
    {
        icon= trophy
    }
    
    const subHeading = {fontSize:"16px",fontWeight:700,lineHeight:"24px"}
  return (
    <div className='card'>
        {
            best &&
            <span className='best'>
            <img src={icon} alt="" />{best}
            </span>
        }
        
        <div className='index'>
        <span >{idx}</span>
        </div>
        <div className='image'>
            <img src={image} alt="" />
            <div className='rate-min'>
            <div className='ratings-min'>
            <span className='rating-top-number'>{ratingNumber}</span>
            <span  className='rating-text'style={{fontWeight:400}}>{ratingText}</span>
            <StarsRating stars={stars} />
            </div>
            
           
        </div>
        
        </div>
        <button className='btn-min'>View </button>
        <div className='text'>
            <div className='top-text'>
            <span className='plan' style={subHeading}>{planName}-</span>
            <span>{topText}</span>
            </div>
            <div className="highlights" >
                <span style={subHeading}>
                    Main Highlights
                </span>
                <br />
                {highlights}
               
            </div>
            <span className='show-more' style={{display:"flex", alignItems:"center", gap:"2px", fontSize:"16px", color:"#1B88F4", cursor:"pointer"}}>
                Show More<IoIosArrowDown color='#1B88F4' cursor="pointer"/> </span>

        </div>
        <div className='rate-max'>
            <div className='ratings-max'>
            <span  className="rating-top-number"style={{fontSize:"32px", lineHeight:"48px"}}>{ratingNumber}</span>
            <span className='rating-text' style={{fontWeight:400}}>{ratingText}</span>
            <StarsRating stars={stars}/>
            </div>
            
            <button className='btn-max'>View </button>
        </div>
    </div>
  )
}

export default Card

