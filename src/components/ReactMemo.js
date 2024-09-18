import React from "react";

const ReactMemo = React.memo(({ todo }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {todo.map((item, i) => {
          return (
            <li key={i} id={`todo-${i} item-jumbotron`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default ReactMemo;
