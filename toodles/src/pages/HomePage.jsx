import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import useTodoStore from "../stores/todoStore";

function HomePage() {

  const todos = useTodoStore((state) => state.todos);

  console.log(todos);

  return (
    <>
      <Navbar />
      <h1>Todos</h1>

      { todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}

    
    </>
  );
}

export default HomePage;