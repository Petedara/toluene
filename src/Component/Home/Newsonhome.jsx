import React from "react";
import Photospeak from "../photospeak.jpg";
import "./newsonhome.css";

export default function Newsonhome() {
    return (
        <nav className="news-on-home">
            <div className="news-category">
                <div>Basketball</div>
                <div className="line"></div>
            </div>
            <div className="photo-headline-category">
                <div className="photo-headline">
                    <img src={Photospeak} alt="" />
                    <div className="headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="photo-headline">
                    <img src={Photospeak} alt="" />
                    <div className="headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="photo-headline">
                    <img src={Photospeak} alt="" />
                    <div className="headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
                <div className="photo-headline">
                    <img src={Photospeak} alt="" />
                    <div className="headline">
                        <p>Chelsea</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi?
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
