import TodoListItem from "./TodoListItem";

function TodoList() {
  const todos = [
    { id: crypto.randomUUID(), title: "sleep", isCompleted: true },
    { id: crypto.randomUUID(), title: "study", isCompleted: false },
    { id: crypto.randomUUID(), title: "play", isCompleted: true },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
