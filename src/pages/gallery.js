import React from "react"
import Media from "../component/media"
import './gallery.css'
export default class Gallery extends React.Component{
    render(){
        return(
            <div className="gallery">
                <div className="container container-gallery">
                    <div className="row mb-40">
                        <div className="col-4">
                            <Media value image="gallery-1.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-2.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-3.svg" width="100%" height="100%"/>
                        </div>
                    </div>
                    <div className="row mb-40">
                        <div className="col-4">
                            <Media value image="gallery-4.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-5.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-6.svg" width="100%" height="100%"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Media value image="gallery-7.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-8.svg" width="100%" height="100%"/>
                        </div>
                        <div className="col-4">
                            <Media value image="gallery-9.svg" width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}