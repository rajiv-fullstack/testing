import React from "react";
import ReactDom from "react-dom";

function Number(propd){
    return(
        <>
          <h1>{propd.Name}</h1>
          <h2>{propd.Master}</h2>
            <button className="more-btn">{propd.Bmaster}</button>
        </>
    );
}

export default Number;