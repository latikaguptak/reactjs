import { useState } from "react"


function App() {
  const [length,setLength]= useState(8);
  const [number,setNumber]=useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");


  return (
    <>
      <h1> Password Generator </h1>
    </>
  )
}

export default App
