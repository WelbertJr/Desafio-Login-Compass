import React, { FunctionComponent, useState } from "react";
import { InputSearch } from "../Inputs/InputStyled";
import { Button } from "../Buttons/Buttons";
import { LoginLogo } from "../LoginPage/LoginPageStyled";
import {
  ContainerSearch,
  ContainerSearchPage,
  ContainerImage,
  ContainerInputButtonSearch,
  SearchUsers,
  ParagraphSearch,
  TitleSearch,
  CardUser,
  UserImage,
  UserName,
  UserDescription,
  UserNameDescription,
} from "./SearchStyled";
import { Modal } from "./components/Modal/Modal";
export const SearchPage: FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ContainerSearchPage>
      <ContainerSearch width='70%'>
        <SearchUsers>
          <TitleSearch>Busca</TitleSearch>
          <ParagraphSearch>
            Para encontrar o usuário desejado digite seu nome abaixo.
          </ParagraphSearch>
          <ContainerInputButtonSearch>
            <InputSearch type='text' placeholder='Ex.: Thauany' />
            <Button type='button' text='Buscar' />
          </ContainerInputButtonSearch>
          <CardUser>
            <UserImage />
            <UserNameDescription>
              <UserName>Nome</UserName>
              <UserDescription>Description</UserDescription>
            </UserNameDescription>
            <Button
              type='button'
              text='VER MAIS'
              onClick={() => setOpenModal(true)}
            />
          </CardUser>
          <Modal
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
          />
          <CardUser></CardUser>
          <CardUser></CardUser>
        </SearchUsers>
      </ContainerSearch>
      <ContainerImage width='30%'>
        <LoginLogo alt='Login Logo' />
      </ContainerImage>
    </ContainerSearchPage>
  );
};
