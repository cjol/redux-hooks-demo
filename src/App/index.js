import React from "react";
import "./App.css";
import { useSelector, useActions } from "react-redux";

function useCounter() {
  const count = useSelector(state => state.count);
  const increment = useActions(() => ({ type: "ADD" }));
  const decrement = useActions(() => ({ type: "SUBTRACT" }));

  return [count, increment, decrement];
}

function App() {
  const [count, increment, decrement] = useCounter();
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <button onClick={increment}>UP</button>
          <button onClick={decrement}>DOWN</button>
        </div>
      </header>
    </div>
  );
}

export default App;
