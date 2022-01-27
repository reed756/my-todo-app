import { useState } from "react";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const OriginalTodos = [
    { key: 0, name: "Read NC notes" },
    { key: 1, name: "Attend lecture" },
    { key: 2, name: "Participate in sprint" },
  ];
  const [todos, setTodos] = useState(OriginalTodos);
  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ol>
        {todos.map((todo) => {
          return <li key={todo.key}>{todo.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default TodoList;
