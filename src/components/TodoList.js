import { useState } from "react";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

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
        {todos.map((todo, index) => {
          return (
            <li key={todo.key} id={index}>
              {todo.name}{" "}
              <DeleteTodo todos={todos} index={index} setTodos={setTodos} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
