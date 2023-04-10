import React from "react";
import { FunctionComponent } from "react";
import { InputUser, Label, InputPassword, InputSearch } from "./InputStyled";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  isFormValid?: boolean;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: FunctionComponent<InputProps> = ({
  type,
  placeholder,
  label,
  value,
  isFormValid,
  inputRef,
  onChange,
}): any => {
  if (placeholder === "Usuário")
    return (
      <>
        <Label htmlFor='input-user'>{label}</Label>
        <InputUser
          type={type}
          placeholder={placeholder}
          autoComplete='true'
          value={value}
          isFormValid={isFormValid}
          onChange={onChange}
          id='input-user'
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
        isFormValid={isFormValid}
        onChange={onChange}
      />
    );
  else {
    return (
      <InputSearch
        type={type}
        placeholder={placeholder}
        autoComplete='true'
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    );
  }
};
