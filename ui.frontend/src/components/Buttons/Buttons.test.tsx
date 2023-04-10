import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { Button } from "./Buttons";

describe("Button Render Testing", () => {
  test("should render button", () => {
    render(<Button text='Continuar' type='submit' />);
    const button = screen.getByRole("button", { name: "Continuar" });
    expect(button).toBeInTheDocument();
  });
});
