import React from "react";
import { FunctionComponent } from "react";
import CompassHeader from "../../../../assets/compassuol-logo-success.png";
//import Weather from "../Weather/Weather";
import { HeaderBody, HeaderImage /*HeaderBodyWeather*/ } from "./HeaderStyled";
//import Clock from "../Clock/Clock";

export const Header: FunctionComponent = () => {
  return (
    <div>
      <HeaderBody>
        <HeaderImage src={CompassHeader} />
      </HeaderBody>
    </div>
  );
};
