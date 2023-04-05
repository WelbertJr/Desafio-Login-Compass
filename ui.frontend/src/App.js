import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";

class App extends Page {
  componentDidMount() {
    const allowedPaths = [
      "/home",
      "/search-page",
      "/success-page",
      "/error-page-401.html",
    ];
    if (
      !allowedPaths.some(
        (path) => window.location.pathname.indexOf(path) !== -1
      )
    )
      if (window.location.pathname.includes("/error-page-404.html")) {
        return;
      } else {
        window.location.href = "./error-page-404.html";
      }
  }
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
