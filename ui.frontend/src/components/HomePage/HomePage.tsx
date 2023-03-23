import React, {
  FunctionComponent,
  useState,
  FormEvent,
  useEffect,
} from "react";
import {
  Main,
  ContainerLeft,
  ContainerIcon,
  Icon,
  TitleLogin,
  ParagraphLogin,
  Form,
  ContainerRight,
  HomeIcon,
  SubContainerLeft,
} from "./HomePageStyled";
import { Input } from "../Inputs/Input";
import { ErrorMessage } from "../Inputs/InputStyled";
import { ContainerPassword } from "../Inputs/InputStyled";
import { Button } from '../Buttons/Buttons';
import { useHistory } from "react-router-dom";

export const HomePage: FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  let history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("data.user") != null &&
      localStorage.getItem("data.password") != null
    ) {
      setTimeout(() => {
        // eslint-disable-next-line no-lone-blocks
        {
          if (
            localStorage.getItem("data.user") != null &&
            localStorage.getItem("data.password") != null
          ) {
            history.push("/content/reactapp/us/en/success-page.html");
          }
        }
      }, 5500);
    }
  }, [history]);

  const handleSignUpForm = (event: FormEvent) => {
    event.preventDefault();
    if (name !== "admin" || password !== "admin") {
      setError("Ops, usuário ou senha inválidos. Tente novamente!");
      return;
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);
    history.push("/content/reactapp/us/en/success-page.html");
  };

  return (
    <Main>
      <ContainerLeft>
        <ContainerIcon>
          <Icon />
        </ContainerIcon>
        <SubContainerLeft>
          <TitleLogin>Olá,</TitleLogin>
          <ParagraphLogin>
            Para continuar navegando de forma segura, efetue o login na rede.
          </ParagraphLogin>
          <Form onSubmit={handleSignUpForm}>
            <Input
              type='text'
              placeholder='Usuário'
              value={name}
              label='Login'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
            <ContainerPassword>
              <Input
                type='password'
                placeholder='Senha'
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </ContainerPassword>
            <Button type="submit" name="Continuar" />
          </Form>
        </SubContainerLeft>
      </ContainerLeft>
      <ContainerRight>
        <HomeIcon />
      </ContainerRight>
    </Main>
  );
};
