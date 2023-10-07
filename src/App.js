import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    console.log("Se incrementó una unidad");
  }

  function decrease() {
    setCount(count - 1);
    console.log("Se decrementó una unidad");
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
      </header>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
