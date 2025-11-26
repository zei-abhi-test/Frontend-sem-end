import {useState} from 'react' ;

export default function Conditional() {
    const [show , setShow] = useState(true) ;

    return (
        <div>
            <h2> Conditional rendering</h2> 

            <button onClick={() => setShow(!show)}>Toggle</button>

            {show && <p>Now you seee me nigga </p>}
        </div>
    )
}