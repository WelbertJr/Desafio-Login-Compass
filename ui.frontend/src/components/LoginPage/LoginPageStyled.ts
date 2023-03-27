import styled from "styled-components";
import imgNotebook from "../../assets/img-notebook.png";
import logoLogin from "../../assets/compassuol-logo-login.png";
import { Container } from "./Components/ContainerGray/ContainerGrayStyled";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const ContainerIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    display: flex;
    padding-right: 11%;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  background: url(${logoLogin});
  background-repeat: no-repeat;
  display: flex;
  height: 94px;
  width: 349px;
  @media (max-width: 349px) {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const SubContainerLeft = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 37.9rem;
  justify-content: flex-start;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 15%;
  }
  @media (max-width: 450px) {
    padding: 5%;
    margin-top: 15%;
  }
`;

export const TitleLogin = styled.h1`
  font-family: "Poppins";
  font-size: 6rem;
  font-weight: 400;
  color: #e0e0e0;
`;

export const ParagraphLogin = styled.p`
  font-family: "Poppins";
  font-size: 1.6rem;
  font-weight: 400;
  color: #e0e0e0;
`;

export const Form = styled.form`
  margin-top: 6.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerRight = styled(Container)`
  padding: 1.9rem 0 0 0;
  background: url(${imgNotebook});
  background-repeat: no-repeat;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  align-items: normal;
  max-height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeIcon = styled.div`
  background: url(${logoLogin});
  background-repeat: no-repeat;
  width: 34.9rem;
  height: 9.4rem;
  margin: 0;
`;
