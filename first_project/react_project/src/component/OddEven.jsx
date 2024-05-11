
import {useState} from 'react'

function OddEven() {
    const [number ,setNumber] = useState(null);

  return (
    <>
      <div>{number}</div>
      <div>
        <input type="text" onClick={setNumber}/>
            
        </div>
      
    </>
  
  )
}

export default OddEven
