import { useState } from "react";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState({ key: "", name: "" });

  return (
    <div>
      <input
        onChange={(event) => {
          const newObj = { key: props.todos.length, name: event.target.value };
          setNewTodo(newObj);
        }}
        value={newTodo.name}
      ></input>
      <button
        onClick={() => {
          const newTodos = [...props.todos, newTodo];
          props.setTodos(newTodos);
          setNewTodo({ key: "", name: "" });
        }}
      >
        ADD TODO
      </button>
    </div>
  );
};

export default AddTodo;
