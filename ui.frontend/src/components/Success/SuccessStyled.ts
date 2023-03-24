import styled from "styled-components";
import CompassBall from "../../assets/uol-ball-transparent.png";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const SuccessMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 98vw;
  height: 70vh;
  font-family: "Poppins";
`;

export const SuccessImage = styled.div`
  background-image: url(${CompassBall});
  width: 67.2rem;
  height: 46.85rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  @media (max-height: 768px) {
    width: 90vw;
    height: 50vh;
  }
  @media (max-width: 768px) {
    width: 90vw;
    height: 50vh;
  }
`;

export const SuccessText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 13.4rem;
  width: 90%;
  align-self: center;
  text-align: right;
  margin-bottom: 4vh;
  @media (max-width: 1617px) {
    margin-right: 7rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
