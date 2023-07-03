import React, { useContext } from "react";
import DarkMood from "../DarkMood";
import "../css/header.css";

function Header({ setIsDark }) {
    const isDark = useContext(DarkMood);
    return (
        <div className="header">
            <div className={isDark ? "dark" : "light"}>
                <button
                    className={isDark ? "dark-btn" : "light-btn"}
                    onClick={() => {
                        setIsDark(!isDark);
                    }}
                >
                    {isDark ? "Dark" : "Light"}
                </button>
            </div>
        </div>
    );
}

export default Header;
