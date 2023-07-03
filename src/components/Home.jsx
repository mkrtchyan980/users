import React, { useContext } from "react";
import DarkMood from "../DarkMood";
import "../css/home.css";
import Users from "./Users";

function Home() {
    const isDark = useContext(DarkMood);
    return (
        <div className={isDark ? "home-dark" : "home-light"}>
            <div className={isDark ? "cont-dark" : "cont-light"}>
                <Users />
            </div>
        </div>
    );
}

export default Home;
