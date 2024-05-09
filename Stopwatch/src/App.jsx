import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(0);
    useEffect(()=>{
    console.log(time);
    const timer = setInterval(()=>{setTime(time + 1)},1000);
    return ()=>{
      clearInterval(timer);
    }

  },[time]);

  const handleReset =() => {
    setTime(0)
    // clearInterval(time);  
  };
  return (
    <>
    <div className="App">
      <h1> Stopwatch </h1>
      <h3>{time}</h3>
      <button onClick={time}>click me to start</button>
      <button onClick={handleReset}>click me to stop</button>
    </div>

    </>
  )
}

export default App
