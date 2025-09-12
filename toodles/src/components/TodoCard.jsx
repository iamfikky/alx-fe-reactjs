import useTodoStore from "../stores/todoStore";

function TodoCard({ todo }) {

  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div className="todo-card">
      <p
      style={{ 
        textDecoration: todo.completed ? "line-through" : "none"
      }}
      >{ todo.text }</p>

      { todo.completed ? "✅ Done" : <button onClick={() => { toggleTodo(todo.id) }}>Mark Done</button> }
    </div>
  );
}

export default TodoCard;