import { useState } from "react";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import EditButton from "./EditButton";

const TodoList = () => {
  const OriginalTodos = [
    { key: 0, name: "Read NC notes" },
    { key: 1, name: "Attend lecture" },
    { key: 2, name: "Participate in sprint" },
  ];
  const [todos, setTodos] = useState(OriginalTodos);
  return (
    <div className="list">
      <AddTodo todos={todos} setTodos={setTodos} />
      <ol>
        {todos.map((todo, index) => {
          return (
            <li key={todo.key} id={index}>
              <p>{todo.name}</p>
              <div className="todo-buttons">
                <EditButton todos={todos} index={index} setTodos={setTodos} />
                <DeleteTodo todos={todos} index={index} setTodos={setTodos} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
