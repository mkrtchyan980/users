import React, { useContext } from "react";
import "../css/users.css";
import "../css/home.css";
import DarkMood from "../DarkMood";

function User({ user }) {
    const isDark = useContext(DarkMood);
    return (
        <div className="user">
            <img src="https://johannesippen.com/img/blog/humans-not-users/header.jpg" />
            <h5 className={isDark}>{user.name}</h5>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
        </div>
    );
}

export default User;
