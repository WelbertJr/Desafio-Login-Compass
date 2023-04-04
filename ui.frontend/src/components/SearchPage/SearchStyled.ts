import { ErrorMessage } from "./../Inputs/InputStyled";
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

export const SearchUsers = styled.div`
  width: 100%;
  height: 87%;
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

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

export const SearchError = styled(ErrorMessage)`
  margin: 2% auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 2% 0;
    font-size: 1.2rem;
  }
`;

export const ContainerInputButtonSearch = styled.div`
  display: flex;
  margin-bottom: 3.4%;
  min-height: 12rem;
`;

export const ContainerUsersRepos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 53.6rem;
  scrollbar-width: thin;
  scrollbar-color: #aaa;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 1rem;
  }
`;

export const CardUser = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.4%;
  background: #26292c;
  border: 0.1rem solid #aaaaaa;
  border-radius: 0.8rem;
  align-items: center;
  padding: 0 5%;
  @media (max-width: 768px) {
    padding: 3% 5%;
  }
`;

export const UserImage = styled.img`
  width: 9.3rem;
  height: 9.3rem;
  border-radius: 50%;
  @media (max-width: 960px) {
    height: 7.3rem;
  }
  @media (max-width: 770px) {
    width: 8.3rem;
    height: 6.3rem;
  }
  @media (max-width: 550px) {
    width: 6.3rem;
  }
  @media (max-width: 420px) {
    height: 5.3rem;
  }
`;

export const UserNameDescription = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  margin: 5%;
  @media (max-width: 720px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 20%;
  }
`;

export const UserName = styled.h2`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 2.4rem;
  color: #ffffff;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
  @media (max-width: 440px) {
    font-size: 1.4rem;
  }
`;

export const UserDescription = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  color: #8d8d8d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
  @media (max-width: 440px) {
    font-size: 1rem;
  }
`;
