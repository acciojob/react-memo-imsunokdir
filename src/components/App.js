import React, { useEffect, useMemo, useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

let c = 0;

const App = () => {
  const [todo, setTodo] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodo([...todo, `New Todo`]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleSubmit = () => {
    if (inputValue.trim()) {
      setTodo([...todo, inputValue.trim()]);
      setInputValue("");
    }
  };

  const taskCount = useMemo(() => {
    console.log("asdasdasdasd");
    return todo.length;
  }, [todo]);

  return (
    <div id="main">
      <h1>Todo List</h1>
      <button onClick={addTodo} id="add-todo-btn">
        Add todo
      </button>
      <br />
      <h1 id="incr-cnt">{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <br />
      <input
        type="text"
        id="skill-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit} id="skill-btn">
        Submit
      </button>
      <br />
      <UseMemo taskCount={taskCount} />
      <ReactMemo todo={todo} />
    </div>
  );
};

export default App;
