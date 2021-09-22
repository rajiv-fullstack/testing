import React from "react";
import ReactDom from "react-dom";

 function Imgtext(props){
     return(
         <>
             <img src={props.Head} className="image-center" />
             <h1>{props.Para}</h1>
             <button className="more-btn">{props.Btn}</button>
         </>
     );
 }

 

 export default Imgtext;
 