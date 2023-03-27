import styled from "styled-components";
import { Container } from "../LoginPage/Components/ContainerGray/ContainerGrayStyled";
import { ContainerRight } from "../LoginPage/LoginPageStyled";

export const ContainerSearchPage = styled.div`
  display: flex;
`;

export const ContainerSearch = styled(Container)`
  justify-content: flex-start;
  align-items: baseline;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const ContainerImage = styled(ContainerRight)`
  @media (max-width: 1124px) {
    display: none;
  }
`;

export const ContainerInputButtonSearch = styled.div`
  display: flex;
`;

export const HeaderSearchPage = styled.header`
  height: 24.9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5% 7.9% 7.4% 10.7%;
  @media (max-width: 768px) {
    margin: 0;
    padding: 5% 4%;
  }
`;

export const TitleSearch = styled.h1`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 6rem;
  color: #e0e0e0;
  margin-bottom: 0.3rem;
`;

export const ParagraphSearch = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 5.4rem;
  color: #e0e0e0;
`;
