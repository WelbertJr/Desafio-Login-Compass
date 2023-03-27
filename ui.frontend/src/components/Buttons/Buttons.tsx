import React from "react";
import { FunctionComponent } from "react";
import {
  ButtonError,
  ButtonRemoveStorage,
  ButtonSearch,
  ButtonStyled,
  ButtonWrapper,
  ContainerIcons,
  ViewMoreButton,
} from "./ButtonsStyled";
import { BiSearch } from "react-icons/bi";
interface ButtonProps {
  text: string;
  className?: string;
  type: any;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  className,
  type,
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
  } else if (text === "Buscar") {
    return (
      <ButtonSearch type={type} onClick={onClick}>
        {text}
        <ContainerIcons>
          <BiSearch color={"white"} size={"3rem"} />
        </ContainerIcons>
      </ButtonSearch>
    );
  } else {
    return (
      <ViewMoreButton type={type} onClick={onClick}>
        {text}
      </ViewMoreButton>
    );
  }
};
