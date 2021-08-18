import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addItem(todoList, name = "walk dog") {
  const todoInput = todoList.getByLabelText("Todo:");

  fireEvent.change(todoInput, { target: { value: name } });

  const button = todoList.getByText("Add todo");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new todo to list", function () {
  const todoList = render(<TodoList />);
  //should not be any todos on list yet
  expect(todoList.queryByText("x")).not.toBeInTheDocument();
  addItem(todoList);

  //todo and remove button should now be in list
  const removeBtn = todoList.getByText("x");
  expect(removeBtn).toBeInTheDocument();
  expect(todoList.queryByText("walk dog")).toBeInTheDocument();
});

it("removes a todo from list", function () {
  const todoList = render(<TodoList />);
  addItem(todoList);

  const removeBtn = todoList.getByText("x");
  fireEvent.click(removeBtn);
  expect(todoList.queryByText("walk dog")).not.toBeInTheDocument();
  expect(removeBtn).not.toBeInTheDocument();
});
