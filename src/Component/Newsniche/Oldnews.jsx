import React from "react";
import Photospeak from '../photospeak.jpg'
import "./oldnews.css"

export default function Oldnews(){
    return(
        <nav className="old-nav-news">
            <div className="old-news">
                <div className="old-news-top-section">
                    <div className="old-news1">
                        <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                        <div className="old-news-headline1 old-news-headline">
                            <p>Chelsea</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                            </p>
                        </div>
                    </div>
                    <div className="old-news2">
                        <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                        <div className="old-news-headline2 old-news-headline">
                            <p>Chelsea</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="old-news3">
                    <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"100%"}}/>
                    <div className="old-news-headline3 old-news-headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}