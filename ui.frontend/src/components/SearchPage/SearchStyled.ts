import styled from "styled-components";
import { Container } from "../LoginPage/Components/ContainerGray/ContainerGrayStyled";
import { ContainerRight } from "../LoginPage/LoginPageStyled";
import Elipse from "../../assets/Ellipse.png";
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

export const ContainerInputButtonSearch = styled.div`
  display: flex;
  margin-bottom: 3.4%;
`;

export const CardUser = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  margin-top: 2.4%;
  background: #26292c;
  border: 0.1rem solid #aaaaaa;
  border-radius: 0.8rem;
  align-items: center;
  padding: 0 5%;
`;

export const UserImage = styled.img`
  width: 9.3rem;
  height: 9.3rem;
  border-radius: 50%;
  background-image: url(${Elipse});
`;

export const UserNameDescription = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  margin: 5%;
`;

export const UserName = styled.h2`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 2.4rem;
  color: #ffffff;
`;

export const UserDescription = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  color: #8d8d8d;
`;
