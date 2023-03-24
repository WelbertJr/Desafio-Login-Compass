import React from "react";
import { FunctionComponent } from "react";
import { ButtonStyled, ButtonWrapper } from "./ButtonsStyled";
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
  } else if (text === "Acessar  Busca") {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
};
