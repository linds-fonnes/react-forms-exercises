import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

const box = { bgColor: "green", height: 30, width: 40 };

it("renders without crashing", function () {
  render(<Box key={9999} box={box} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box key={9999} box={box} />);
});
