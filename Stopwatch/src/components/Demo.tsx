// import { useState, useEffect } from 'react';

// const StopwatchN = () => {
//     const [time, setTime] = useState(0);
//     const [timerId, setTimerId] = useState(null);

//    

//     const handleStart = () => {
//         if (!timerId) {
//             const id = setInterval(() => {
//                 setTime(prevTime => prevTime + 1);
//             }, 1000);
//             setTimerId(id);
//         }
//     };

//     const handleStop = () => {
//         clearInterval(timerId);
//         setTimerId(null);
//     };

//     const handleReset = () => {
//         clearInterval(timerId);
//         setTime(0);
//         setTimerId(null);
//     };

//     useEffect(() => {
//       
//         return () => {
//             if (timerId) {
//                 clearInterval(timerId);
//             }
//         };
//     }, [timerId]); // Effect tied to changes in timerId

//     return (
//         <div className="App">
//             <h1>Stopwatch</h1>
//             <h3>{time}</h3>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     );
// };

// export default StopwatchN;
