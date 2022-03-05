import React from "react"
import './contact.css'
export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <div className="container">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="box">
                                <p>Address : Jl. Raya 2-6, Bali, Indonesia</p>
                            </div>
                            <div className="box">
                                <p>Phone : +62 821 1234 6789</p>
                            </div>
                            <div className="box">
                                <p>Email : reservation@elegencehotel.com</p>
                            </div>
                            <div className="box">
                                <p>Reservation Office Hours: Monday - Saturday : 9.00 - 17.00 WIB (GMT +07.00)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}