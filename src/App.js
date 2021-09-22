import React from "react";
import './App.css';
import './index.css';
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import Sdata from "./Sdata";
import Smart from "./Smart";
import  Imgtext from "./Imgtext";

const favSeiries = "smartdata";


const Favs = () => {
if(favSeiries == "smartdata") {
  return(
    <Smart 
     key= {Sdata[1].id}
     Head= {Sdata[1].Head}
     Para= {Sdata[1].Para}
     Btn= {Sdata[1].Btn}
   />
 );
}else{
  return(
  <Imgtext 
     key= {Sdata[2].id}
     Head= {Sdata[2].Head}
     Para= {Sdata[2].Para}
     Btn= {Sdata[2].Btn}

  />
  );
}
};

const App = () => (
  <>
  <div class="container-fluid display-table">
        <div class="row display-table-row">
        <Sidebar />
        <Content />
    </div>
    </div>
    <Footer />
  <h1>Serious</h1>
   <Favs />
  </>
 );
export default App;
export { Smart };
export { Imgtext };


