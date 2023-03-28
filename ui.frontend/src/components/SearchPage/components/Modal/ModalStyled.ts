import styled from "styled-components";
import Elipse from "../../../../assets/Ellipse.png";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  z-index: 1000;
`;

export const CardModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #242424;
  border-radius: 0.8rem;
  width: 90%;
  height: 80%;
  display: flex;
`;

export const ContainerNameDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

export const UserImage = styled.img`
  width: 17.4rem;
  height: 17.4rem;
  border-radius: 50%;
  background-image: url(${Elipse});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin: 15% 11.7% 6.3% 11.7%;
`;

export const UserName = styled.h2`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 3.2rem;
  color: #ffffff;
`;

export const RepositoryDescription = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 2rem;
  color: #8d8d8d;
`;

export const RepositoriesCard = styled.div`
  width: 60%;
  height: 60%;
  background: #2b2b2b;
  margin-top: 10%;
`;
