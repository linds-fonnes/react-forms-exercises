import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const item = { id: 9999, name: "walk dog" };
it("renders without crashing", function () {
  render(<Todo item={item} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo item={item} />);
  expect(asFragment()).toMatchSnapshot();
});
