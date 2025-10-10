import React from "react"; // Required for JSX
import { render, screen, fireEvent } from "@testing-library/react"; // Testing utilities
import "@testing-library/jest-dom"; // Extends Jest matchers
import TodoList from "../components/TodoList"; // Path to the component


describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test("renders initial todos", () => {
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
  });

  test("deletes a todo", () => {
    const deleteButton = screen.getAllByText("X")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
