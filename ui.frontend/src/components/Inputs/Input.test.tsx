import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Render Testing", () => {
  test("should render input", () => {
    render(<Input label='Login' placeholder='Usuário' />);
    const inputElement = screen.getByLabelText("Login");
    expect(inputElement).toBeInTheDocument();
  });
});
