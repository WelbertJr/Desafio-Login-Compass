import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage Render Testing", () => {
  test("should render LoginPage", () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });
});
