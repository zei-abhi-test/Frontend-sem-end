import { useState } from "react";

export default function Events() {
    const [text , setText] = useState("") ;
    return (
        <div>
            <h2>Event handling daa</h2>

            <input type="text" placeholder="Type someshitt" onChange={(e) => setText(e.target.value)} />

            <p>YOu Typed: {text}</p>

            <button onClick={() => alert("AHHHH!!!")}>Show ALERT</button>
        </div>
    )
}