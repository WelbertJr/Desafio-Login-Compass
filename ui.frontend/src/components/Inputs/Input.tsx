import React from "react";
import { FunctionComponent } from "react";
import {
  InputUser,
  Label,
  InputPassword,
} from "./InputStyled";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: FunctionComponent<InputProps> = ({
  type,
  placeholder,
  label,
  value,
  onChange,
}): any => {
  if (placeholder === "Usuário")
    return (
      <>
        <Label>{label}</Label>
        <InputUser
          type={type}
          placeholder={placeholder}
          autoComplete='true'
          value={value}
          onChange={onChange}
        />
      </>
    );
  else if (placeholder === "Senha")
    return (
        <InputPassword
          type={type}
          placeholder={placeholder}
          autoComplete='true'
          value={value}
          onChange={onChange}
        />
    );
};
