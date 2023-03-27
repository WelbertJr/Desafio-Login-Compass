import React from "react";
import { useHistory } from "react-router-dom";
import { InputSearch } from "../Inputs/InputStyled";
import { Button } from "../Buttons/Buttons";
import { HomeIcon } from "../LoginPage/LoginPageStyled";
import {
  ContainerSearch,
  ContainerSearchPage,
  ContainerImage,
  ContainerInputButtonSearch,
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
          <TitleSearch>Busca</TitleSearch>
          <ParagraphSearch>
            Para encontrar o usuário desejado digite seu nome abaixo.
          </ParagraphSearch>
          <ContainerInputButtonSearch>
            <InputSearch type='text' placeholder='Ex.: Thauany' />
            <Button type='button' text='Buscar' />
          </ContainerInputButtonSearch>
        </HeaderSearchPage>
      </ContainerSearch>
      <ContainerImage width='30%'>
        <HomeIcon />
      </ContainerImage>
    </ContainerSearchPage>
  );
};
