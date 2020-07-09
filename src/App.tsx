import * as React from "react";
import "./styles.css";
import useStore from "./xstate";

export default function App() {
  const { todoList } = useStore();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {todoList.states.success &&
        todoList.value.map((item, i) => <h6 key={i}>{item.name}</h6>)}
      {todoList.states.loading && "loading..."}
      <button onClick={todoList.load}>fetch</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
