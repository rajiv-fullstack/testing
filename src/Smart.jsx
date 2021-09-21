import React from "react";
import ReactDom from "react-dom";

 function Smart(props){

    return(
        <>
            <h1>{props.Head}</h1>
            <p>{props.Para}</p>
            <button className="more-view">{props.Btn}</button>  
        </>
    );
 }
 
 export default Smart;
