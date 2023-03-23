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
  font-size: 18px;
  line-height: 27px;
  line-height: 100%;
  margin-top: 10%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
  &:hover {
    background-color: #f22e07;
    cursor: pointer;
  }
`;
export const GitHubButton = styled(ButtonStyled)`
  width: 20%;
  height: 4.5vh;
  margin-top: 0;
`;
export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  font-size: 1.2rem;
  color: #c13216;
  width: 12.8rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: Poppins;
  &:hover {
    cursor: pointer;
    font-size: 0.9rem;
  }
  &.logout {
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    color: white;
    grid-column: 1/2;
    grid-row: 1/3;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-column: 2/5;
    grid-row: 1/3;
  }
`;
