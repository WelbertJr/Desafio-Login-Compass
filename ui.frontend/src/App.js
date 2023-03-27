import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import { SearchPage } from "./components/SearchPage/Search";
//import { ErrorPage404 } from "./components/ErrorPages/ErrorPage404/ErrorPage404";
//import { ErrorPage401 } from "./components/ErrorPages/ErrorPage401/ErrorPage401";
//import { LoginPage } from "./components/LoginPage/LoginPage";
//import { HomePage } from "./components/HomePage/HomePage";
//import  SuccessPage  from "./components/Success/SuccessPage";
// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
        <SearchPage />
      </div>
    );
  }
}

export default withModel(App);
