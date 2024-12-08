import { useState, useEffect } from 'react';



// The `setInterval` function in JavaScript returns a unique interval ID, which is a numerical value. This ID can be used to reference the interval later, particularly if you want to stop the execution of the interval using `clearInterval`. Here’s how it works:

// 1. **Starting the Interval**: When you set up an interval using `setInterval`, you provide a callback function and a time interval in milliseconds. The browser then starts executing the callback function at the specified intervals.

// 2. **Interval ID**: Upon creation, `setInterval` returns a unique ID for the interval. This ID is specific to that particular interval instance.

// 3. **Using the Interval ID**: You can use this ID with the `clearInterval` function to stop the interval. This is necessary to prevent memory leaks or unnecessary processing, especially when the interval is no longer needed, such as when unmounting a component in React or when the desired action has been completed.

// Here is a simple example demonstrating this:

// ```javascript
// // Setting an interval that logs "Hello" every second
// let intervalId = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// // Stopping the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);
// ```

// In this example, `intervalId` holds the ID returned by `setInterval`, and `clearInterval(intervalId)` is used to stop the interval after 5 seconds.

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(null);

    console.log('Component render with time:', time);
    
    console.log(time)
    const handleStart = () => {
        // console.log("TimerId",timerId)
        if (!timerId) { // Only set a new interval if there isn't already one running
        // it means if timerId is true then if block will be false then this section will not run

//         The code snippet you provided is a conditional block within a function, commonly used in a timer or stopwatch functionality in JavaScript with React. Let's break it down for clarity:

// 1. **Condition Check (`if (!timerId)`):**
//    - `!timerId` is checking if `timerId` is falsy. In JavaScript, falsy values include `null`, `undefined`, `0`, `false`, `NaN`, and empty strings (`""`).
//    - In the context of this code, `timerId` is likely initialized to `null` or `undefined`. The check `if (!timerId)` ensures that the code inside the `if` block runs only if there is no active interval set (i.e., no timer is currently running). This prevents multiple intervals from being set up unintentionally, which could lead to bugs or high CPU usage as multiple timers update the state simultaneously.

// 2. **Setting the Interval (`const id = setInterval(...);`):**
//    - `setInterval(() => { setTime(prevTime => prevTime + 1); }, 1000);` sets up an interval that executes the provided arrow function every 1000 milliseconds (or every second).
//    - Inside the `setInterval` function, `setTime(prevTime => prevTime + 1)` is used to increment the `time` state. Here, `setTime` uses a function to get the previous state (`prevTime`) and returns the incremented value (`prevTime + 1`). This approach ensures that the state update is based on the most recent state, which is crucial in asynchronous operations like setting intervals.

// 3. **Storing the Interval ID (`setTimerId(id);`):**
//    - `const id` stores the unique interval ID returned by `setInterval`. This ID is necessary to reference the interval later if you need to clear it (stop the timer).
//    - `setTimerId(id);` then stores this interval ID in the state. Storing the interval ID in a state variable allows you to access this ID elsewhere in your component, particularly to stop the interval when needed, such as when a "stop" button is clicked or the component is about to unmount.

// This code structure is particularly effective in UIs where you need a "Start" button to initiate an action repeatedly at regular intervals (like a stopwatch) and ensure that clicking "Start" multiple times doesn't create multiple overlapping intervals. This pattern helps manage the interval efficiently and prevents common bugs associated with multiple intervals running at the same time.
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setTimerId(id);
            // 1,2,3,4,5
        }
    }

    const handleStop = () => {
        // console.log("TimerId",timerId);
        clearInterval(timerId);
        setTimerId(null); // Clear the timer id when stopping the timer
    }

    const handleReset = () => {
        clearInterval(timerId);
        setTime(0);
        setTimerId(null);
    };

    useEffect(() => {
        // Clean up the interval on component unmount
        console.log('Effect cleanup with timerId:', timerId);
       
        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        }
    }, [timerId]); // Only re-run the effect if timerId changes

    return (
        <div className="App">
            <h1>Time-Stop </h1>
            <h3>{time}:00</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Stopwatch;


// Seeing the `time` value being logged as `0` twice initially in your React component is due to how React handles state updates and re-rendering. Here’s an explanation of why this might be happening:

// 1. **Initial Render**:
//    - When your `Stopwatch` component first mounts, it initializes the `time` state to `0` using `useState(0)`.
//    - Immediately after initializing state, the component body executes, including any console logs. At this point, `console.log(time)` logs `0` as the component is rendering for the first time.

// 2. **State Initialization of `timerId`**:
//    - Right after logging `time`, the `timerId` state is initialized (`useState(null)`). This initialization doesn’t directly cause a re-render, but it's part of the initial setup process.
   
// 3. **React Strict Mode (Development Mode Only)**:
//    - If your application is running in React’s Strict Mode (common in development environments created by tools like Create React App), React intentionally double-invokes certain lifecycle methods including the initial rendering. This is intended to help identify side effects in the render phase. This would cause your `console.log(time)` to execute twice, each logging `0`, as the state hasn’t changed yet.

// 4. **No State Change Yet**:
//    - Since there’s no state update happening between these two log calls and no side effects modifying the `time` state, it remains `0` for both invocations.
   
// 5. **Effect of Asynchronous State Updates**:
//    - Even if the state (`time` or `timerId`) were to be updated shortly after the initial render, the changes wouldn’t be reflected immediately. React batches state updates and processes them asynchronously, which means you would see the logged value change only in subsequent renders.

// Given this setup, if you’re not seeing further updates to `time` logged as you expect (like incrementing every second once the timer starts), ensure that your code is not running into issues with multiple intervals set unintentionally or any other logical errors. However, from the code provided, it appears to be set up correctly to handle starting, stopping, and resetting a timer.

// **Note**: Always remember that console logs reflect the state at the time of the component render. For debugging dynamic state updates like those in a timer, you might consider using `useEffect` to log changes specifically when the `time` state updates:

// ```javascript
// useEffect(() => {
//     console.log(time); // This will log every time 'time' changes.
// }, [time]);
// ```

// This setup helps isolate logs to show only when there are actual updates, making it clearer how state changes over time.
