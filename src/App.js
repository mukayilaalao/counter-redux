import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const count = selector((state) => state.counter);
  const increment = () => dispatch({ type: "inc" });
  const decrement = () => dispatch({ type: "dec" });
  const addBy10 = () => dispatch({ type: "addBy", payload: 10 });

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy10}>addBy 10</button>
    </div>
  );
}

export default App;
