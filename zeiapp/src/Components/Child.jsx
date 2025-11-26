export default function Child({sendData}) {
    return (
        <div>
            <button onClick={() => sendData("Data is coming ahhh from child")}>Send to Parents</button>
            
        </div>
    )
}