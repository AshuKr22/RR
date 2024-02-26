import React, { useState } from "react";
import "./navbar.scss";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((menuOpen)=>!menuOpen)
    
  };

  return (
    <nav className="navbar">
     
      <div className="search">
        <form action="search">
        <CiSearch color="grey" className="search-icon" size="18.5px" style ={{marginLeft : "10px"}}/>
          <input type="text" />
          
        </form>
      </div>
      <div className={`hamburger-menu`} >
        <button onClick={handleMenuToggle}>
          {
            menuOpen?<IoMdClose size="30px" />:<RxHamburgerMenu size="30px" />
        
          }
        </button>
      
      
      </div>
      <ul className={`${menuOpen?"nav-list-active":"nav-list"}`}>
        <li className="nav-items">Categories</li>
        <li className="nav-items">Website Builder</li>
        <li className="nav-items">Today's deals</li>
      </ul>
   
    </nav>
  );
};

export default Navbar;