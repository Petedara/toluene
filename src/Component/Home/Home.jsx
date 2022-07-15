import React from "react";
import Trending from "./Trending";
import Head from '../Head/Head';
import Newsonhome from "./Newsonhome";

export default function Home(){
    return (
        <nav>
            <Head/>
            <Trending />
            <Newsonhome />
            <Newsonhome />
        </nav>
    )
}