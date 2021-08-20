import React from "react";
import './App.css';
import './index.css';
import Heading from  "./Heading";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <div class="container-fluid display-table">
        <div class="row display-table-row">
        <Sidebar />
        <Content />
    </div>
    </div>
    <Footer />
    </>
  );
}
export default App;


