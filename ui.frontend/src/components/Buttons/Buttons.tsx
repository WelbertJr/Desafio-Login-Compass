import React from 'react';
import { FunctionComponent } from "react";
import { ButtonStyled, ButtonWrapper, GitHubButton } from "./ButtonsStyled";
interface ButtonProps {
  name: string;
  className?: string;
  type: any;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  name,
  className,
  type,
  onClick,
}) => {
  if (name === "Continuar") {
    return <ButtonStyled type={type}>{name}</ButtonStyled>;
  }
  if (name === "Pesquisar") {
    return (
      <GitHubButton className={className} type={type} onClick={onClick}>
        {name}
      </GitHubButton>
    );
  } else if (name === "Continuar Navegando") {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {name}
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper className={className} type={type} onClick={onClick}>
        {name}
      </ButtonWrapper>
    );
  }
};