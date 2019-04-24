import React from "react";
import "./App.css";
import { useSelector, useActions } from "react-redux";
import { actions } from "../store";

// To separate our logic, we create a custom hook.
// This is optional - we could do all of this inside the render function.
// In a larger app, we can share this hook across multiple components to reuse our logic
function useCounter() {

  // Instead of using `mapStateToProps`, we can now use `useSelector`
  // The return value of this function is some value selected from the store
  // This can be a simple function, or could be a memoising selector from `reselect`
  const count = useSelector(state => state.count);

  // Instead of using `mapDispatchToProps` we can now use `useActions`
  // We provide an action creator as a parameter, and react-redux will
  //  return the same action creator with redux's `dispatch` bound
  const increment = useActions(() => ({ type: actions.ADD }));
  const decrement = useActions(() => ({ type: actions.SUBTRACT }));

  // Our custom hook has three elements, so we return all three
  return [count, increment, decrement];
}

// With React hooks, class-components are never required, so we use a functional component
function App() {

  // We use our custom middleware to retrieve a value and two action creators
  const [count, increment, decrement] = useCounter();

  return (
    <div className="App">
      <header className="App-header">

        {/* The value we read from the redux store is displayed as usual */}
        <p>{count}</p>
        <div style={{ flexDirection: "row", display: "flex" }}>

          {/* The action creators from our hook are also bound as normal */}
          <button onClick={increment}>UP</button>
          <button onClick={decrement}>DOWN</button>
        </div>
      </header>
    </div>
  );
}

export default App;
