import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Paragraph Render Testing", () => {
  test("should render paragraph", () => {
    render(<Paragraph text='Our mission is' fontSize='2.8rem' />);
    const text = screen.queryByText("Our mission is");
    expect(text).toBeInTheDocument();
  });
});
