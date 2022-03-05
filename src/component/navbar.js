import React from "react"
import {Link} from 'react-router-dom'
import './navbar.css'
import Media from "./media"
export default class Navbar extends React.Component{
    render(){
        return(
            <switch>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to="/"><Media value image="logo.svg" width="65px" height="65px"></Media>Elegence</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page">Rooms</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </switch>
        )
    }
}