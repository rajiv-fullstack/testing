import React from "react";
import ReactDom from "react-dom";

 function Imgtext(props){
     return(
         <>
             <img src={props.Baby} className="image-center" />
             <h1>{props.Title}</h1>
             <button className="more-btn">{props.Butmore}</button>
         </>
     );
 }

 

 export default Imgtext;
 