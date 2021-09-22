import React from "react";
import ReactDom from "react-dom";


 function Smart(prop){

    return(
        <>
            <h1>{prop.Head}</h1>
            <p>{prop.Para}</p>
            <button className="more-views">{prop.Btn}</button>  
        </>
    );
 }
 
 export default Smart;
