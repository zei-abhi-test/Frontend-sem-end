// import Card from "./Components/card";

// export default function App() {
//   const name = "ZEI" ;

//   return (
//     <div>
//       <Card title="Capybara" desc="Cutest animal" />
//       <Card title="Meaw" desc="Deadliest meaw" />
//       <Card title="Larry" desc="HE is legendary" />
//       <h1>he is papa {name}</h1>
//     </div>
//   )

// }



// import {useState} from 'react' ;

// export default function App() {
//   const [count , setCount] = useState(0) ;

//   return (
//     <div> 
//       <h1> Count: {count}</h1>
//       <button onCLick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }


import Conditional from "./Components/conditional";
import Counter  from "./Components/Counter";
import Events from "./Components/events";
import List from "./Components/list";
import ApiFetch from "./Components/ApiFetch";
import Form from "./Components/forms";

// export default function App () {
//   return (
//     <div>
//       <Counter />
//       <Events />
//       <Conditional />
//       <List />
//       <ApiFetch />
//       <Form />
//     </div>
//   )
// // }


// export default function App() {
//   const [msg,setMsg] = useState("") ;

//   return (
//     <div>
//       <h1>
//         Parent componenet 
//       </h1>
//       <p> Messsage from child: {msg}</p>
//       <Child sendData={setMsg} />
//     </div>
//   )
// }
// import {useState} from 'react' ;
// import Child from "./Components/child" ;



// import { Routes , Route , Link } from "react-router-dom";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";

// export default function App() {
//   return (
//     <div>
//       <nav style={{display: "flex" , gap : "20px"}}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//     </div>
//   )
// } 


import Window from "./Window";

export default function App() {
  return (
    <div>
      <Window />
    </div>
  );
}
