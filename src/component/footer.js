import React from "react"
import {Link} from 'react-router-dom'
import './footer.css'
import Media from "./media"
export default class Footer extends React.Component{
    render(){
        return(
            <switch>
                <div className="footer">
                    <div className="container container-footer">
                        <div className="row align-items-start">
                            <div className="col-3">
                                <Link className="logo" to="/"><Media value image="logo.svg" width="65px" height="65px"/>Elegence</Link>
                            </div>
                            <div className="col-3">
                                <h5>For beginners</h5>
                                <p>Start Booking a room</p>
                                <p>Use payment</p>
                            </div>
                            <div className="col-3">
                                <h5>About</h5>
                                <p>About us</p>
                                <p>Careers</p>
                                <p>Term & Conditions</p>
                            </div>
                            <div className="col-3">
                                <h5>Social media</h5>
                                <div className="row">
                                    <div className="col-2">
                                        <Media value image="youtube-icon.svg" width="100%" height="100%"/>
                                    </div>
                                    <div className="col-2">
                                        <Media value image="instagram-icon.svg" width="100%" height="100%"/>
                                    </div>
                                    <div className="col-2">
                                        <Media value image="facebook-icon.svg" width="100%" height="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="copyright text-center">All Right Reserved © 2021</p>
                    </div>
                </div>
            </switch>
        )
    }
}