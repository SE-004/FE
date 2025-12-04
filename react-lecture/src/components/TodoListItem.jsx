function TodoListItem({ todo }) {
  return (
    <>
      {todo.isCompleted ? (
        <li className="completed">{todo.title} </li>
      ) : (
        <li> {todo.title}</li>
      )}
    </>
  );
}

export default TodoListItem;
