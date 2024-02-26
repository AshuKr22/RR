import check from "./checkmark.svg"
const data=
[
    {
        idx:1,
        best: "Best Choice",
        planName:"WixPro 72-Inch Responsive Website Builder",
        topText:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        ratingNumber:9.8,
        ratingText:"Exceptional",
        stars:5

    },
    {
        idx:2,
        best: "Best Value",
        planName:"SiteCraft 68-Inch Ultimate Web Design Studio",
        topText:" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White))",
        highlights:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        ratingNumber:9.5,
        ratingText:"Excellent",
        stars:4.5

    },
    {
        idx:3,
        planName:"WixPro 72-Inch Responsive Website Builder",
        topText:" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        highlights:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        ratingNumber:9.3,
        ratingText:"Exceptional",
        stars:5

    },
    {
        idx:4,
        planName:"CDK Resposive Builder",
        topText:"An extensive library of widgets and apps, and detailed step-by-step guides",
        highlights:<>
        <div className="card-4-highlights">
            <div className="feature-rating">
                <span>9.9</span>
                <span>8.9</span>
                <span>8.9</span>

            </div>
            <div className="feature-text">
                <span>building responsive</span>
                <span>Cool</span>
                <span>Docs</span>
            </div>
            </div>
            <div style={{color:"#4B5665",  padding:"5px",fontSize:"15px", marginBottom:"5px"}}>
                <span  style={{fontSize:"16px", color:"#2C384A"}}>Why we Love it</span>
                <br />
                <div className="like-it" >
                <span style={{display: "flex",direction:"row",alignItems:"center",gap:"2px"}}><img src={check} alt="" /><span>Documentation</span></span>
                <span style={{display: "flex",direction:"row",alignItems:"center",gap:"2px"}}><img src={check} alt="" /><span>Easy Use</span></span>
                <span style={{display: "flex",direction:"row",alignItems:"center",gap:"2px"}}><img src={check} alt="" /><span>Out of box</span></span>
                </div>
            </div>
            </>,
        ratingNumber:9.1,
        ratingText:"Very Good",
        stars:4

    }
]
export default data;