import { useDispatch , useSelector } from "react-redux";
import { fetchPosts } from "./redux/apiSlice";

export default function ReduxPosts() {
    const dispatch = useDispatch() ;

    const { posts , loading , error} = useSelector((state) => state.posts);

    return (
        <div>
            <h2>Redux Async Posts</h2>
            
            <button onClick={() => dispatch(fetchPosts())}>Load Posts</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{color: "purple"}}>{error}</p>}

            {posts.map((p) => (
                <div key={p.id}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}
