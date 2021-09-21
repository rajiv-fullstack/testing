import React from "react";
import './App.css';
import './index.css';
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import Sdata, { chain, field } from "./Sdata";
import Smart from "./Smart";
import Leftright from "./Leftright";
import { Smata } from "./Sdata";
import  Imgtext from "./Imgtext";
import Number from "./Number";

const App = () => {
  return (
    <>
    <div class="container-fluid display-table">
        <div class="row display-table-row">
        <Sidebar />
        <Content />
    </div>
    </div>
    {Sdata.map((val) => {
       return(
          <Smart 
           Head= {val.Head}
           Para= {val.Para}
           Btn= {val.Btn}
         />
       );
    })
    
    }
    
    {Smata.map((val) => {
    return(
      <Leftright 
        Heads= {val.Heads}
        Paras= {val.Paras}
        Btns= {val.Btns}
      />
    );
    })
    
    }
    <br />
    {field.map((vale) => {
     return(
      <Imgtext 
        Baby= {vale.Baby}
        Title= {vale.Title}
        Butmore= {vale.Butmore} 
      />
     );
    })
    }
    {chain.map((vald) => {
      return(
        <Number 
            Master = {vald.Master}
            Name = {vald.Name}
            Bmaster = {vald.Bmaster}
        />
      );
    })
    }
    
    
    <Footer />
    </>
  );
}
export default App;


