import React from "react";
import Photospeak from '../photospeak.jpg'
import "./midnews.css"
export default function Midnews(){
    return(
        <nav className="mid-nav-news">
            <div className="mid-news">
                <div className="mid-news1">
                    <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                    <div className="mid-news-headline1 mid-news-headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="mid-news2">
                    <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                    <div className="mid-news-headline2 mid-news-headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="mid-news3">
                    <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                    <div className="mid-news-headline3 mid-news-headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="mid-news4">
                    <img src={Photospeak} alt="" style={{width:"100%", maxHeight:"169px"}}/>
                    <div className="mid-news-headline4 mid-news-headline">
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