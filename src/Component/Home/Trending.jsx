import React from "react";
import Photospeak from "../photospeak.jpg"
import './trending.css'
export default function Trending(){
    return(
        <nav className="all-trends">
            <nav className="trending-now">
                <button>TRENDING NOW</button><hr />
            </nav>
            <nav className="trending">
                <div className="trending-update1 trending-update">
                    <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}} />
                    <div className="trending-tags">
                        <a href="/" className="btn btn-danger">Soccer</a>
                        <p>This is the new Haircut trending among youths in the whole Continent of South America</p>
                    </div>
                </div>
                    <div className="trending-update2 trending-update">
                        <img src={Photospeak} alt="" style={{width:"100%", height:"100%", objectFit:"cover"}} />
                        <div className="trending-tags">
                            <a href="/" className="btn btn-danger">Soccer</a>
                            <p>This is the new Haircut trending among youths in the whole Continent of South America</p>
                        </div>
                    </div>
                <div className="trending-update3 trending-update">
                    <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}} />
                    <div className="trending-tags">
                        <a href="/" className="btn btn-danger">Soccer</a>
                        <p>This is the new Haircut trending among youths in the whole Continent of South America</p>                 </div>
                    </div>
                <div className="trending-update4 trending-update">
                    <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}} />
                    <div className="trending-tags">
                        <a href="/" className="btn btn-danger">Soccer</a>
                        <p>This is the new Haircut trending among youths in the whole Continent of South America</p>
                    </div>
                </div>
            </nav>
        </nav>
    )
}