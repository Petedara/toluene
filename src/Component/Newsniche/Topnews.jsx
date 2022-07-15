import React from "react";
import Photospeak from '../photospeak.jpg'
import './topnews.css'

export default function Topnews(){
    return(
        <nav className="top-news">
            <div className="top-section">
                <div className="top-news1">
                    <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}}/>
                    <div className="top-news-headline1">
                        <a href="/" className="btn btn-danger">WWE</a>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae placeat suscipit officia ipsam. Rem, alias?</p>
                    </div>
                </div>
                <div className="top-news2">
                    <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}}/>
                    <div className="top-news-headline2 top-news-headline">
                        <p>Man Utd</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nostrum ad, eos pariatur at quibusdam?</p>
                    </div>
                </div>
            </div>
            <div className="top-news3">
                <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}}/>
                <div className="top-news-headline3 top-news-headline">
                    <p>Man Utd</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nostrum ad, eos pariatur at quibusdam?</p>
                </div>
            </div>
            <div className="top-news4">
                <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}}/>
                <div className="top-news-headline4 top-news-headline">
                    <p>Man Utd</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nostrum ad, eos pariatur at quibusdam?</p>
                </div>
            </div>
            <div className="top-news5">
                <img src={Photospeak} alt="" style={{width:"100%", height:"100%"}}/>
                <div className="top-news-headline5 top-news-headline">
                    <p>Man Utd</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nostrum ad, eos pariatur at quibusdam?</p>
                </div>
            </div>
        </nav>
    )
}