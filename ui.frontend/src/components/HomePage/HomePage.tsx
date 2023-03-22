import React from "react";
import {
  Main,
  ContainerLeft,
  TitleLogin,
  ParagraphLogin,
  ContainerRight,
  HomeIcon,
} from "./HomePageStyled";
export const HomePage = (): JSX.Element => {
  return (
    <Main>
      <ContainerLeft>
        <TitleLogin>Olá,</TitleLogin>
        <ParagraphLogin>
          Para continuar navegando de forma segura, efetue o login na rede.
        </ParagraphLogin>
      </ContainerLeft>
      <ContainerRight>
        <HomeIcon />
      </ContainerRight>
    </Main>
  );
};
