import { useState } from "react";

const EditButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const editInput = document.createElement("input");
  editInput.addEventListener("change", (event) => {
    setEditedTodo(event.target.value);
  });
  return (
    <button
      onClick={(event) => {
        if (!isClicked) {
          event.target.innerText = "CONFIRM";
          setIsClicked(true);
          event.target.appendChild(editInput);
          console.dir(editInput);
        } else {
          const newTodos = [...props.todos];
          newTodos[props.index].name = editedTodo;
          event.target.innerText = "EDIT";
          props.setTodos(newTodos);
          setIsClicked(false);
          setEditedTodo("");
        }
      }}
      className="edit-button"
    >
      EDIT
    </button>
  );
};

export default EditButton;
