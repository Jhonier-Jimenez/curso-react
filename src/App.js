import "./App.css";
import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
        <div className="container">
          <h1>{time}</h1>
          <button onClick={updateTime}>Get Time</button>
        </div>
      </header>
    </div>
  );
}

export default App;
