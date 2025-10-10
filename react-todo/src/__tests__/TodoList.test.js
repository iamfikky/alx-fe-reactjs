import React from "react"; // Required for JSX
import { render, screen, fireEvent } from "@testing-library/react"; // Testing utilities
import "@testing-library/jest-dom"; // Extends Jest matchers
import TodoList from "../components/TodoList"; // Path to the component

describe("TodoList Component", () => {
  // Test initial render
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // Test adding a new todo
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  // Test toggling todo completion
  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    expect(todo).toHaveClass("line-through");
  });

  // Test deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("X")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
