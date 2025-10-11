import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // adjust path if needed

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
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  // Test toggling todo completion
  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).not.toHaveClass("line-through");

    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through");

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("line-through");
  });

  // Test deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText("X");

    // Delete the first todo
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
