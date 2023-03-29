import React from "react";
import { FunctionComponent } from "react";
import {
  BackButton,
  ButtonError,
  ButtonRemoveStorage,
  ButtonSearch,
  ButtonStyled,
  ButtonWrapper,
  ContainerIcons,
  FrameButtonsTopSearch,
  HrButtonsTopSearch,
  ShareButton,
  ShareMiniButton,
  TopSearchButtons,
  ViewMore,
  ViewMoreButton,
} from "./ButtonsStyled";
import { BiSearch } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";

interface ButtonProps {
  text?: string;
  className?: string;
  type: any;
  onClick?: () => void;
  counter?: number;
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  className,
  type,
  counter,
  onClick,
}) => {
  if (text === "Continuar") {
    return <ButtonStyled type={type}>{text}</ButtonStyled>;
  }
  if (text === "Acessar Busca") {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  if (text === "Logout") {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  if (text === "Deslogar") {
    return (
      <ButtonRemoveStorage type={type} onClick={onClick}>
        {text}
      </ButtonRemoveStorage>
    );
  }
  if (text === "Voltar para página inicial") {
    return (
      <ButtonError type={type} onClick={onClick}>
        {text}
      </ButtonError>
    );
  }
  if (text === "Buscar") {
    return (
      <ButtonSearch type={type} onClick={onClick}>
        {text}
        <ContainerIcons>
          <BiSearch color={"white"} size={"3rem"} />
        </ContainerIcons>
      </ButtonSearch>
    );
  }
  if (text === "VER MAIS") {
    return (
      <ViewMoreButton type={type} onClick={onClick}>
        {text}
      </ViewMoreButton>
    );
  }
  if (text === "Repositórios") {
    return (
      <TopSearchButtons type={type} onClick={onClick} className={className}>
        <div id='div'>
          {text}
          <FrameButtonsTopSearch>{counter}</FrameButtonsTopSearch>
        </div>
        <HrButtonsTopSearch className={className} />
      </TopSearchButtons>
    );
  }
  if (text === "COMPARTILHAR") {
    return (
      <ShareButton type={type} onClick={onClick}>
        {text}
      </ShareButton>
    );
  }
  if (text === "VOLTAR") {
    return (
      <BackButton type={type} onClick={onClick}>
        {text}
      </BackButton>
    );
  }
  if (text === "Favoritos") {
    return (
      <TopSearchButtons type={type} onClick={onClick} className={className}>
        <div id='div'>
          {text}
          <FrameButtonsTopSearch>{counter}</FrameButtonsTopSearch>
        </div>
        <HrButtonsTopSearch className={className} />
      </TopSearchButtons>
    );
  } else if (text === "Ver mais repositórios") {
    return (
      <ViewMore type='button' onClick={onClick}>
        {text}
      </ViewMore>
    );
  } else {
    return (
      <ShareMiniButton type='button'>
        <ContainerIcons>
          <BsFillShareFill color={"white"} size={"1.5rem"} />
        </ContainerIcons>
      </ShareMiniButton>
    );
  }
};
