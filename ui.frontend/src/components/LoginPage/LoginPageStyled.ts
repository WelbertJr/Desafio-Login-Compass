import styled from "styled-components";
import { Container } from "./Components/ContainerGray/ContainerGrayStyled";
import { isAuthoring } from "../../utils/isAuthoring";
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${isAuthoring() ? "93.7rem" : "100vh"};
  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const MiniContainerLoginIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    display: flex;
    padding-right: 11%;
    justify-content: center;
  }
`;

export const SubMiniContianerLoginIcon = styled.div`
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

export const MiniLoginIcon = styled.img`
  width: 100%;
  height: 100%;
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
    margin-top: 1%;
  }
  @media (max-width: 450px) {
    padding: 5%;
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
  @media (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const ContainerRight = styled(Container)`
  width: ${({ width }) => width};
  padding-top: 1.9rem;
  position: relative;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  align-items: normal;
  max-height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LoginLogo = styled.img`
  position: absolute;
  margin: 0;
  width: 34.9rem;
  height: 9.4rem;
  @media (max-width: 1167px) {
    width: 31.9rem;
  }
`;
