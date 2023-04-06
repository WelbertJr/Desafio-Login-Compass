import React, {
  FunctionComponent,
  useState,
  FormEvent,
  useEffect,
} from "react";
import {
  Main,
  MiniContainerLoginIcon,
  SubMiniContianerLoginIcon,
  MiniLoginIcon,
  TitleLogin,
  ParagraphLogin,
  Form,
  ContainerRight,
  SubContainerLeft,
  BackgroundImage,
  LoginLogo,
} from "./LoginPageStyled";
import { ContainerGray } from "./Components/ContainerGray/ContainerGray";
import { Input } from "../Inputs/Input";
import { ErrorMessage } from "../Inputs/InputStyled";
import { ContainerPassword } from "../Inputs/InputStyled";
import { Button } from "../Buttons/Buttons";
import { useHistory } from "react-router-dom";
import { PopUp } from "./Components/PopUp/PopUp";
import { Btncontainer } from "./Components/PopUp/PopUpStyled";
import loginIcon from "../../assets/compassuol-logo-login.png";
import backgroundLogin from "../../assets/img-notebook.png";
export interface LoginPageProps {
  loginTitle?: string;
  loginParagraph?: string;
  loginImage?: { src: string };
  loginLogo?: { src: string };
  loginButtonColor?: string;
}

const LoginPage: FunctionComponent<LoginPageProps> = ({
  loginTitle,
  loginParagraph,
  loginImage = { src: backgroundLogin },
  loginLogo = { src: loginIcon },
  loginButtonColor,
}) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  const history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("userName") != null &&
      localStorage.getItem("userPassword") != null
    ) {
      setTimeout(() => {
        if (
          localStorage.getItem("userName") != null &&
          localStorage.getItem("userPassword") != null
        ) {
          history.push({
            pathname: "./success-page.html",
            state: { isLoggedIn: true },
          });
          document.title = "Compass - Home";
        }
      }, 5500);
    }
    document.title = "Compass - Login";
  }, [history]);

  const handleSignUpForm = (event: FormEvent) => {
    event.preventDefault();
    if (name !== "admin" || password !== "admin") {
      setError("Ops, usuário ou senha inválidos. Tente novamente!");
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    localStorage.setItem("userName", name);
    localStorage.setItem("userPassword", password);
    history.push({
      pathname: "./success-page.html",
      state: { isLoggedIn: true },
    });
  };
  if (
    localStorage.getItem("userName") != null &&
    localStorage.getItem("userPassword") != null
  ) {
    return (
      <Main>
        <ContainerGray width='50%'>
          <MiniContainerLoginIcon>
            <SubMiniContianerLoginIcon>
              <MiniLoginIcon
                src={loginLogo && loginLogo.src}
                alt='Login Logo'
              />
            </SubMiniContianerLoginIcon>
          </MiniContainerLoginIcon>
          <SubContainerLeft>
            <TitleLogin>{loginTitle ? loginTitle : "Olá,"}</TitleLogin>
            <ParagraphLogin>
              {loginParagraph
                ? loginParagraph
                : "Para continuar navegando de forma segura, efetue o login na rede."}
            </ParagraphLogin>
            <Form onSubmit={handleSignUpForm}>
              <Input
                type='text'
                placeholder='Usuário'
                value={name}
                label='Login'
                isFormValid={isFormValid}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
                }
              />
              <ContainerPassword>
                <Input
                  type='password'
                  placeholder='Senha'
                  value={password}
                  isFormValid={isFormValid}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                  }
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </ContainerPassword>
              <Btncontainer>
                <PopUp />
              </Btncontainer>
            </Form>
          </SubContainerLeft>
        </ContainerGray>
        <ContainerRight width='50%'>
          <BackgroundImage
            src={loginImage && loginImage.src}
            alt='Background Image'
          />
          <LoginLogo src={loginLogo && loginLogo.src} alt='Login Logo' />
        </ContainerRight>
      </Main>
    );
  } else {
    return (
      <Main>
        <ContainerGray width='50%'>
          <MiniContainerLoginIcon>
            <SubMiniContianerLoginIcon>
              <MiniLoginIcon
                src={loginLogo && loginLogo.src}
                alt='Login Logo'
              />
            </SubMiniContianerLoginIcon>
          </MiniContainerLoginIcon>
          <SubContainerLeft>
            <TitleLogin>{loginTitle ? loginTitle : "Olá,"}</TitleLogin>
            <ParagraphLogin>
              {loginParagraph
                ? loginParagraph
                : "Para continuar navegando de forma segura, efetue o login na rede."}
            </ParagraphLogin>
            <Form onSubmit={handleSignUpForm}>
              <Input
                type='text'
                placeholder='Usuário'
                value={name}
                isFormValid={isFormValid}
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
                  isFormValid={isFormValid}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                  }
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </ContainerPassword>
              <Button
                type='submit'
                text='Continuar'
                bgColorLogin={loginButtonColor}
              />
            </Form>
          </SubContainerLeft>
        </ContainerGray>
        <ContainerRight width='50%'>
          <BackgroundImage
            src={loginImage && loginImage.src}
            alt='Background Image'
          />
          <LoginLogo src={loginLogo && loginLogo.src} alt='Login Logo' />
        </ContainerRight>
      </Main>
    );
  }
};

export default LoginPage;
