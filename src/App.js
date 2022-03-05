import React from "react";
import Main from "./main";
import Navbar from "./component/navbar";
import Footer from "./component/footer";


export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}