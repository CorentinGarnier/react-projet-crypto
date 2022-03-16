import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Exchanges from "../Exchanges";

describe(Exchanges.name, () => {

  it("renders an icon `❄️`", () => {
    render(<Exchanges />);
    expect(screen.getByText("❄️")).toBeInTheDocument();
  });
  it("renders a title `Winter`", () => {
    render(<Exchanges />);
    expect(screen.getByText("Winter")).toBeInTheDocument();
  });
  it("renders a text `50 days ago`", () => {
    render(<Exchanges />);
    expect(screen.getByText("50 days ago")).toBeInTheDocument();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
