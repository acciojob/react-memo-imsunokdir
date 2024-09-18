import React from "react";

const ReactMemo = React.memo(({ todo }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {todo.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default ReactMemo;
