import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import SearchPage from "./Search";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
describe("SearchPage Render Testing", () => {
  test("should render SearchPage", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <SearchPage />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
