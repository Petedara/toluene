import React from "react";
import Topnews from "./Topnews";
import Head from "../Head/Head";
import Midnews from "./Midnews";
import Oldnews from "./Oldnews";

export default function Nichebody(){
    return(
        <nav>
            <Head/>
            <Topnews />
            <Midnews />
            <Midnews />
            <Oldnews />
        </nav>
    )
}