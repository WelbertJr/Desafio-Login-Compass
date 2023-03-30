import React from "react";
import { FunctionComponent } from "react";
import Weather from "../Weather/Weather";
import { HeaderBody, HeaderImage, HeaderBodyWeather } from "./HeaderStyled";
import Clock from "../Clock/Clock";

interface HeaderProps {
  logo: any;
}
export const Header: FunctionComponent<HeaderProps> = ({ logo }) => {
  return (
    <>
      <HeaderBody>
        <HeaderImage src={logo} />
        <Clock />
        <HeaderBodyWeather>
          <Weather />
        </HeaderBodyWeather>
      </HeaderBody>
    </>
  );
};
