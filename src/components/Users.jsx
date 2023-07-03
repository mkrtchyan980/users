import React, { useContext, useEffect, useState } from "react";
import DarkMood from "../DarkMood";
import User from "./User";
import "../css/users.css";

function Users() {
    const [users, setUsers] = useState([]);
    const isDark = useContext(DarkMood);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setUsers(users));
    }, []);
    return (
        <div>
            <div className={isDark ? "child-light" : "child-dark"}>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users;
