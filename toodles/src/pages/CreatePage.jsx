import { useState } from "react";
import Navbar from "../components/Navbar";
import useTodoStore from "../stores/todoStore";
import { useNavigate } from "react-router";

function CreatePage() {
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
    navigate('/');
  };


  const addTodo = useTodoStore((state) => state.addTodo)

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <p>Create a New Todo</p>
        <div className="input-group">
          <label htmlFor="todo">Your Todo</label>
          <input
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            type="text"
            required
            value={todo}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default CreatePage;