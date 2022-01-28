const DeleteTodo = (props) => {
  return (
    <button
      onClick={() => {
        const newTodos = [...props.todos];
        newTodos.splice(props.index, 1);
        props.setTodos(newTodos);
      }}
      className="delete-button"
    >
      DELETE
    </button>
  );
};

export default DeleteTodo;
