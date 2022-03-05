import React from "react"
import Home from "./pages/home"
import About from "./pages/about"
import Gallery from "./pages/gallery"
import Contact from "./pages/contact"
import { Route,Switch } from "react-router-dom"

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Gallery' component={Gallery}/>
                <Route exact path='/Contact' component={Contact}/>
            </Switch>
        )
    }
}