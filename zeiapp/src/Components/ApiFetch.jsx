import { useEffect, useState } from "react";

export default function ApiFetch() {
    const [posts, setPosts] = useState([]) ;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data.slice(0,5)))
    } , []) ;

    return (
        <div>
            <h2>API DATA</h2>
            {posts.map((p) => (
                <div key={p.id} style={{marginBottom: "20px"}}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}