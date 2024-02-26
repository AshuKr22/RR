import Navbar from "./components/navbar/Navbar"
import "./App.scss"
import { CiCircleCheck } from "react-icons/ci";
import { RxDash } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from "./components/cards/Card";
import Cards from "./components/cards/Cards";
import SmallCards from "./components/SmallCards/SmallCards";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/footer/Footer";
function App() {
  

  return (
    <>

       <Navbar/> 
       <div className="main-body">
          <div className="top-section">
            <span className="heading">Best Website builders in the US</span>
            <hr />
            <div className="ruler-section">
              
              <span  style={{display:"flex",alignItems:"center", gap:"2px"}}><CiCircleCheck size="20px"/>Last Updated
              <RxDash  />
              <span className="date">February 22, 2020</span>
              </span>
              
              <span style={{display:"flex",alignItems:"center", gap:"2px"}}><IoInformationCircleOutline size="20px"/>Advertising Disclosure</span>
              
             <span className="drop-down">Top Relevant <IoIosArrowDown /></span>


            </div>

            <hr />
           </div>
          <div className="tools">
            <button>Tools</button>
            <button>AWS Builder</button>
            <button>Start Build</button>
            <button>Build Supplies</button>
            <button>Tooling</button>
            <button>BlueHosting</button>
          </div>
          <div className="tags">
            <span style={{fontSize:"13px"}}>Home</span><MdKeyboardArrowRight  />
            <span>Hosting for all</span><MdKeyboardArrowRight />
            <span>Hosting</span><MdKeyboardArrowRight />
            <span>Hosting6</span><MdKeyboardArrowRight />
            <span>Hosting5</span>
            
          </div>
          <div className="card-items">
            <Cards/>
          </div>
   

          <div style={{fontSize:"32px",fontWeight:400,lineHeight:"44px", color:"#2C384A", marginTop:"5rem" ,marginBottom:"2rem"}}>
            <span style={{}}>Related deals you might like for</span>
          </div>
          <div className="card-horizontal">
            <SmallCards/>
          </div>
          <SignUp/>
          
        </div>  
        <Footer/>
    </>
  )
}

export default App
