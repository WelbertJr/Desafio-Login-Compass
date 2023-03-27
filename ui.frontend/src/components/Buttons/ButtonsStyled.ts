import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  width: 100%;
  height: 67px;
  background-color: #cf2e0e;
  border-radius: 100px;
  font-family: "Poppins";
  color: white;
  font-style: Bold;
  font-size: 1.2rem;
  margin-top: 10%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
  &:hover {
    background-color: #f22e07;
    cursor: pointer;
    font-size: 1.6rem;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  background: #ffffff;
  font-size: 1.8rem;
  color: #c13216;
  width: 50%;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: "Poppins";
  text-align: center;
  &:hover {
    cursor: pointer;
    font-size: 1.9rem;
    @media (max-height: 720px) {
      font-size: 1.4rem;
    }
    @media (max-width: 1150px) {
      font-size: 1.4rem;
    }
  }
  &.logout {
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    color: white;
    grid-column: 1/2;
    grid-row: 1/3;
    text-align: center;
    justify-content: center;
  }
  @media (max-height: 720px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1150px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-column: 2/5;
    grid-row: 1/3;
  }
`;

export const ButtonRemoveStorage = styled.button`
  margin-right: 10%;
  margin: none;
  border: none;
  color: white;
  background-color: #cf2e0e;
  font-family: "Poppins";
  border-radius: 45px;
  width: 30%;
  color: white;
  font-style: Bold;
  font-size: 1.5rem;
  &:hover {
    background-color: #f22e07;
    cursor: pointer;
  }
`;

export const ButtonError = styled.button`
  width: 100%;
  height: 6.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;
  background: #cf2e0e;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 5rem;
  border: none;
  &:hover {
    background-color: #f22e07;
    cursor: pointer;
    font-size: 2rem;
    @media (max-width: 425px) {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
