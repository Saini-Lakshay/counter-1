// NOTE : some error occured in codesandbox and was not able to authenticate to get the link, please find below the // // code snippet to be pasted in App.js file in new codesandbox project. Thankyou for the cooperation.

import "./styles.css";
import React, { useState, useRef, useEffect } from "react";


export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }


    return () => clearInterval(timer);
  }, [isRunning, count]);


  const handleIsRunning = () => {
    setIsRunning((isRunning) => !isRunning);
  };


  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };


  return (
    <div className="App">
      <h1>Counter</h1>
      {count}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px"
        }}
      >
        <button onClick={handleIsRunning}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
}