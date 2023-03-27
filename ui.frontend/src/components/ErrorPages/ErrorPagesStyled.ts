import styled from "styled-components";

export const ContainerError = styled.div`
  width: 37.9rem;
  height: 28.7rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 40vh;
  }
  @media (max-width: 422px) {
    padding: 0 5%;
    width: 100%;
  }
`;

export const ErrorNumber = styled.h1`
  font-family: "Poppins";
  font-weight: 400;
  color: #e0e0e0;
  font-size: 6rem;
  height: 10.1rem;
`;

export const ErrorParagraph = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  color: #e0e0e0;
  text-align: center;
  margin: 5% 0 10% 0;
  width: 80%;
`;
