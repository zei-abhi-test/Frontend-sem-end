import { useState } from "react";

export default function Form() {
    const [name , setName] = useState("") ;
    const [age , setAge] = useState("") ;

    function handleSubmit(e) {
        e.preventDefault() ;
        alert(`Name: ${name}, Age: ${age}` )
    }

    return (
        <div>
            <h2> REACT FORMS DA SUDEEP !!</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ENter kar bhadwe" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="number" placeholder="age bol" value={age} onChange={(e) => setAge(e.target.value)} />
                <br/>

                <button type="submit">SUBMIT KORR!! </button>


            </form>
        </div>
    )

}