import React from "react";
import { Main, ContainerLeft, ContainerRight, HomeIcon } from "./HomePageStyled";
export const HomePage = (): JSX.Element => {
  return (
    <Main>
      <ContainerLeft></ContainerLeft>
      <ContainerRight>
        <HomeIcon/>
      </ContainerRight>
    </Main>
  );
};
