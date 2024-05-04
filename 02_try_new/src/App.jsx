import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleLike = () => {
    if (count >= 22){
      alert("your count is maximum!");
      setCount(22)
    }
    else{
    setCount(count + 1);
    }
  };
  const removeLike = () => {
    if (count <= 0){
      setCount(0)}
    else{
    setCount(count - 1)
    }
    
  };
  const resetLike = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>Hi</h1>
        <h2> I am Latika Gupta</h2>
      </div>
      <h3>If you like this add the likes {count}</h3>
      <button onClick={handleLike}>Add like </button>
      <br />
      <button onClick={removeLike}>Remove like</button>
      <br />
      <button onClick={resetLike}>Reset</button>
    </>
  );
}

export default App;
