import React from "react";
import { FunctionComponent } from "react";
import {
  ButtonError,
  ButtonRemoveStorage,
  ButtonStyled,
  ButtonWrapper,
} from "./ButtonsStyled";
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
  } else if (text === "Deslogar") {
    return (
      <ButtonRemoveStorage type={type} onClick={onClick}>
        {text}
      </ButtonRemoveStorage>
    );
  } else {
    return (
      <ButtonError type={type} onClick={onClick}>
        {text}
      </ButtonError>
    );
  }
};
