import { useEffect, useState } from "react"


function App() {
  const [length,setLength]= useState(8);
  const [number,setNumber]=useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() =>{


  },[])

  return (
    <>
      <h1> Password Generator </h1>
      <div className=""><spam>copy</spam></div>
    </>
  )
}

export default App
