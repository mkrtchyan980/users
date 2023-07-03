import React, { useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => setPosts(posts));
    }, []);
    return <div></div>;
}

export default Posts;
