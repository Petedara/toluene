import React, { useState } from "react";
import Photospeak from "../photospeak.jpg";
import { Link, useLocation } from "react-router-dom";
import "./head.css";

export default function Head() {
  const [active, setactive] = useState(false);
  const nav = [
    "Soccer",
    "Basketball",
    "Cricket",
    "WWE",
    "Boxing",
    "Golf",
    "Volleyball",
    "Hockey",
    "Rugby",
  ];
  const location = useLocation();
  const path = location.pathname

  const getLocation = (activename) => {
    const name = "/" + activename;
    console.log(path)
    console.log(name);
    if (path === name) {
      console.log("Hello " + name)
      setactive(false);
    }
    setactive(true);
  };

  return (
    <nav className="head">
      <div className="head-tabs">
        <Link to="/" className="head-link active">
          Home
        </Link>
        {nav.map((navitem, key) => {
          return (
            <Link
              key={key}
              onClick={() => getLocation(navitem)}
              to={"/" + navitem}
              className={ active ? "head-link active" : "head-link"}
            >
              {navitem}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
