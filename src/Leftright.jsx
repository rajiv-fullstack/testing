import React from "react";
import ReactDom from "react-dom";

 function Leftright(props){

    return(
        <>
            <h1>{props.Heads}</h1>
            <p>{props.Paras}</p>
            <button className="more-view">{props.Btns}</button>
        </>
    );
 }
 export default Leftright;