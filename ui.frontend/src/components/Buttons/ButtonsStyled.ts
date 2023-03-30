import styled from "styled-components";
interface ButtonsProps {
  bgColorLogin?: string;
  bgColorError?: string;
}
export const ButtonStyled = styled.button<ButtonsProps>`
  border: none;
  width: 100%;
  height: 67px;
  background-color: ${({ bgColorLogin }) =>
    bgColorLogin ? bgColorLogin : "#cf2e0e"};
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
    background-color: ${({ bgColorLogin }) =>
      bgColorLogin ? bgColorLogin : "#f22e07"};
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

export const ButtonError = styled.button<ButtonsProps>`
  width: 100%;
  height: 6.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;
  background: ${({ bgColorError }) =>
    bgColorError ? bgColorError : "#cf2e0e"};
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 5rem;
  border: none;
  &:hover {
    background-color: ${({ bgColorError }) =>
      bgColorError ? bgColorError : "#f22e07"};
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

export const ButtonSearch = styled.button`
  width: 20%;
  margin-left: 4.1%;
  min-height: 6.7rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  align-items: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  background: #cf2e0e;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  cursor: pointer;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));

  &:hover {
    background-color: #f22e07;
    cursor: pointer;
    font-size: 2rem;
    @media (max-width: 1320px) {
      font-size: 1.8rem;
    }
    @media (max-width: 960px) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1320px) {
    font-size: 1.5rem;
  }
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    width: 7.7rem;
    height: 6.7rem;
    font-size: 0;
  }
`;

export const ContainerIcons = styled.span`
  width: max-content;
  display: flex;
  @media (max-width: 768px) {
    width: 60%;
    align-items: center;
    flex-direction: center;
  }
`;

export const ViewMoreButton = styled.button`
  width: 15%;
  height: 4.7rem;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  border: none;
  &:hover {
    cursor: pointer;
    font-size: 1.7rem;
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
    @media (max-width: 720px) {
      margin-left: 20%;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media (max-width: 720px) {
    width: 25%;
    margin-left: 10%;
    font-size: 1rem;
  }
  @media (max-width: 650px) {
    width: 35%;
    margin-left: 20%;
  }
  @media (max-width: 440px) {
    width: 45%;
    margin-left: 10%;
  }
`;

export const TopSearchButtons = styled.button`
  background-color: rgba(42, 42, 42, 1);
  height: 5.5rem;
  width: 17rem;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 1% 2%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.8rem;
  color: #ffffff;
  border: none;
  cursor: pointer;
  #div {
    display: flex;
    justify-content: space-between;
  }
  &.activeRepositoryButton {
    font-weight: 500;
    font-size: 1.9rem;
    @media (max-width: 940px) {
      font-size: 1.5rem;
    }
  }
  &.activeFavoritesButton {
    font-weight: 500;
    font-size: 1.9rem;
    @media (max-width: 940px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 940px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 13.5rem;
    height: 4.7rem;
  }
`;

export const FrameButtonsTopSearch = styled.span`
  width: 3.2rem;
  height: 2.5rem;
  padding: 0.4rem;
  background: #454545;
  border-radius: 4.6rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
`;

export const HrButtonsTopSearch = styled.hr`
  width: 100%;
  margin: auto;
  border: 0.1rem solid rgba(159, 159, 159, 0.7);
  background: rgba(159, 159, 159, 0.7);
  margin-bottom: 0px;
  display: none;
  &.activeRepositoryButton {
    display: flex;
  }
  &.activeFavoritesButton {
    display: flex;
  }
`;

export const ShareButton = styled.button`
  width: 20.8rem;
  height: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  @media (max-width: 940px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ShareMiniButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
    box-shadow: inset 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
    border-radius: 0.8rem;
    cursor: pointer;
    border: none;
    width: 4.4rem;
    height: 4rem;
  }
`;

export const BackButton = styled.button`
  width: 13.6rem;
  height: 4.7rem;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  border: none;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;
  cursor: pointer;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  margin: 2.4% 2.4% 0 0;
  @media (max-width: 940px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const ViewMore = styled.button`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.8rem;
  color: #ffffff;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
