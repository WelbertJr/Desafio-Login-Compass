import styled from "styled-components";
import { Container } from "../LoginPage/Components/ContainerGray/ContainerGrayStyled";

export const ContainerSearchPage = styled.div`
  display: flex;
`;

export const ContainerSearch = styled(Container)`
  justify-content: flex-start;
  align-items: baseline;
`;

export const HeaderSearchPage = styled.header`
  height: 24.9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10.1% 10.9% 7.4% 28.7%;
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
  margin-bottom: 4.7rem;
  color: #e0e0e0;
`;
