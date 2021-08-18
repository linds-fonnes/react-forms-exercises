import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "5", width = "5", color = "green") {
  const colorInput = boxList.getByLabelText("Color:");
  const widthInput = boxList.getByLabelText("Width:");
  const heightInput = boxList.getByLabelText("Height:");

  fireEvent.change(colorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });

  const button = boxList.getByText("Add new box!");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add new box to list", function () {
  const boxList = render(<BoxList />);
  //nothing should show in list yet
  expect(boxList.queryByText("x")).not.toBeInTheDocument();

  //submits form to add new box to list
  addBox(boxList);

  //expect remove button and box to be in list
  const removeBtn = boxList.getByText("x");
  expect(removeBtn).toBeInTheDocument();
  expect(removeBtn.previousSibling).toHaveStyle(`
  background-color: green;
  width: 5px;
  height: 5px;
  `);
});

it("can delete a box from list", function () {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeBtn = boxList.getByText("x");
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
