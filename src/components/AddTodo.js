import { useState } from "react";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState({ key: "", name: "" });

  return (
    <form className="form">
      <label>
        <input
          onChange={(event) => {
            const newObj = {
              key: props.todos.length,
              name: event.target.value,
            };
            setNewTodo(newObj);
          }}
          value={newTodo.name}
        ></input>
      </label>
      <button
        onClick={(event) => {
          event.preventDefault();
          const newTodos = [...props.todos, newTodo];
          props.setTodos(newTodos);
          setNewTodo({ key: "", name: "" });
        }}
      >
        ADD TODO
      </button>
    </form>
  );
};

export default AddTodo;
