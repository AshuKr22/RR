import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import "./footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-categories'>
          <span>CATEGORIES</span>
          <ul>
          <li><a href="">Web Builder</a></li>
          <li><a href="">Hosting</a></li>
          <li><a href="">Data Center</a></li>
          <li><a href="">Robotic-Automation</a></li>
          </ul>
        </div>
        <div className='footer-contact'>
          <span>CONTACT</span>
          <ul>
          <li><a href="">Contact</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms Of Service</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">About</a></li>
          </ul>
        </div>
        <span className='country'>United States <IoIosArrowDown/> </span>

    </div>
  )
}

export default Footer