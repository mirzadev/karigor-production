import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../../Home";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Home component", () => {
  //renders Home test
  // First test
  it("renders", () => {
    render(<Home />);
  });
  // Second Test
});
