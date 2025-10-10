import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">React Todo App</h1>
      <TodoList />
    </div>
  );
}
