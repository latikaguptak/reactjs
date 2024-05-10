
import {useState} from 'react'

function OddEven() {
    const [number ,setNumber] = useState(null);

  return (
    <>
      <div>{number}</div>
      <div>
        <input type="number" onChange={(e) => setNumber(e.target.value)}/>
      </div>
      
    </>
  
  )
}

export default OddEven
