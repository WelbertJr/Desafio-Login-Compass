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
