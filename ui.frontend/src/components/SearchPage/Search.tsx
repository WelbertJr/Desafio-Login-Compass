import React from "react";
import { useHistory } from "react-router-dom";
import { ContainerRight, HomeIcon } from "../LoginPage/LoginPageStyled";
import {
  ContainerSearch,
  ContainerSearchPage,
  HeaderSearchPage,
  ParagraphSearch,
  TitleSearch,
} from "./SearchStyled";
export const SearchPage = () => {
  let history = useHistory();
  return (
    <ContainerSearchPage>
      <ContainerSearch width='70%'>
        <HeaderSearchPage>
          <TitleSearch>Buscar</TitleSearch>
          <ParagraphSearch>
            Para encontrar o usuário desejado digite seu nome abaixo.
          </ParagraphSearch>
        </HeaderSearchPage>
      </ContainerSearch>
      <ContainerRight width='30%'>
        <HomeIcon />
      </ContainerRight>
    </ContainerSearchPage>
  );
};
