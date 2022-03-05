import React from "react"
import './home.css'
import Media from "../component/media"
import { Link } from "react-router-dom"

export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                    <div className="hero">
                        <div className="content">
                            <h1>Watch the stars.
                                 Soak up the sun.
                                Experience peace
                                at Elegance.
                            </h1>
                            <Link className="button1"><h3>Book a room</h3><Media value image="button1.svg" width="40px" height="40px"></Media></Link>
                            <div className="rectangle">
                                <h4>Escape the routine and enjoy the height of luxury at
                                    Indonesia’s #1 luxury resort.
                                </h4>
                            </div>
                        </div>
                        <div className="image">
                            <Media value image="banner.svg" width="100%" height="100%"></Media>
                        </div>
                    </div>
                <div className="container">
                    <div className="cottages">
                        <div className="cottages-explanation">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h2 className="line1">Cottages that blend</h2>
                                    <h2 className="line2">comfort & elegance</h2>
                                </div>
                                <div className="col-5">
                                    <h4>Tucked between sunny coconut groves and pristine
                                        white sand beaches, each Manor’s homely cottages
                                        gives you breathtaking view to wake up to.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="cottages-type">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card">
                                        <Media value image="cottages1.svg" width="100%" height="100%"></Media>
                                        <div className="card-body">
                                            <div className="cottages-name">
                                                <h4>King suite</h4>
                                                <h5>With 3 Bedroom</h5>
                                            </div>
                                            <div className="cottages-price">
                                                <h4>$340/night</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <Media value image="cottages2.svg" width="100%" height="100%"></Media>
                                        <div className="card-body">
                                            
                                            <div className="cottages-name">
                                                <h4>Premium Room</h4>
                                                <h5>With 2 Bedroom</h5>
                                            </div>
                                            <div className="cottages-price">
                                                <h4>$260/night</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card">
                                        <Media value image="cottages3.svg" width="100%" height="100%"></Media>
                                        <div className="card-body">
                                            <div className="cottages-name">
                                                <h4>Master suite</h4>
                                                <h5>With 4 Bedroom</h5>
                                            </div>
                                            <div className="cottages-price">
                                                <h4>$450/night</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="col-9">
                            <h3>Inspired by local traditions
                                & rich history, we’ve crafted an 
                                experience you’re likely to never 
                                forget.
                            </h3>
                        </div>
                        <div className="row">
                        <div className="col">
                                <div className="information-list card">
                                    <div className="card-body">
                                        <Media value image="handshake-icon.svg" width="64px" height="64px" className="icon"/>
                                        <h4>
                                            Dive into history at
                                            the ancient ruins
                                        </h4>
                                        <p>
                                            Rub shoulders with the past at the
                                            ancient ruins and experience the
                                            island from stunning veiwpoint.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-list card">
                                    <div className="card-body">
                                        <Media value image="surfing-icon.svg" width="64px" height="64px" className="icon"/>
                                        <h4>
                                        Tick water sports
                                        of your bucket
                                        </h4>
                                        <p>
                                        Craving an adrenaline rush? Try out
                                        snorkelling, parasailing, jet skiing,
                                        and more adventure activyties.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="information-list card">
                                    <div className="card-body">
                                        <Media value image="spa-icon.svg" width="64px" height="64px" className="icon"/>
                                        <h4>
                                        Relax at boutique
                                        spa and club
                                        </h4>
                                        <p>
                                        Ease the knots in your body and
                                        realese the tension at our spa, and
                                        make full use of our fitness facilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="facility">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Media value image="family.svg" width="100%" height="424px"></Media>
                            </div>
                            <div className="col-6">
                                <h3>
                                    You’ll never want 
                                    to leave
                                </h3>
                                <p>
                                    The freedom to do exactly watch you want: whether it is dipping
                                    into a tub of hot water with a book  or exploring local culture.
                                    The perfect place to open your heart and let it decide!
                                </p>
                                <div className="icon">
                                    <div className="colloum1">
                                        <div className="icon-flex spa">
                                            <Media value image="spa-icon.svg" width="32px" height="32px"/>
                                            <p>Spa</p>
                                        </div>
                                        <div className="icon-flex dining">
                                            <Media value image="restaurant-icon.svg" width="32px" height="32px"/>
                                            <p>Dining</p>
                                        </div>
                                        <div className=" icon-flex fishing">
                                            <Media value image="fishing-icon.svg" width="32px" height="32px"/>
                                            <p>Fishing</p>
                                        </div>
                                    </div>
                                    <div className="colloum2">
                                        <div className="icon-flex pool">
                                            <Media value image="pool-icon.svg" width="32px" height="32px"/>
                                            <p>Pool</p>
                                        </div>
                                        <div className="icon-flex bar">
                                            <Media value image="localbar-icon.svg" width="32px" height="32px"/>
                                            <p>24/7 Bar</p>
                                        </div>
                                        <div className="icon-flex barbeque">
                                            <Media value image="outdoorgrill-icon.svg" width="32px" height="32px"/>
                                            <p>Barbeque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="food-menu">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <h3>
                                    Fresh local ingridients,
                                    delicious global 
                                    cuisine.
                                </h3>
                                <p>
                                    Indulge yourself in lipsmacking gourmet meals prepared by
                                    world-class chefs. Whether it’s late breakfasts, buffets, show 
                                    cookingor fine dining. we’ve got it all.
                                </p>
                                <Link className="button1"><h3>See the menu</h3><Media value image="button1.svg" width="40px" height="40px"></Media></Link>
                            </div>
                            <div className="col-6">
                                <Media value image="food-menu.svg" width="100%" height="100%"></Media>
                            </div>
                        </div>
                    </div>
                    <div className="testimoni">
                        <h3 className="text-center">What customer are saying</h3>   
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                        <Media value image="button-arrow-right.svg" width="100%" height="100%"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                    <Media value image="customer.svg" width="100%" height="100%"/>
                            </div>
                            <div className="col-5">
                                <p>
                                    This hotel itself needs to be itiniraries. The views are
                                    insane, and if you want to reach peak relaxation, the spa
                                    is the place to be.
                                    <br/>
                                    <br/>
                                    <b>-Violet</b>
                                </p>
                            </div>
                            <div className="col-1">
                            <div className="row justify-content-center">
                                    <div className="col-9   ">
                                        <Media value image="button-arrow-left.svg" width="100%" height="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}