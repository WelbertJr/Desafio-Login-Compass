import styled from "styled-components";
import CompassBall from "../../assets/uol-ball-transparent.png";
export const SuccessBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 98vw;
  min-height: 72.5%;
  font-family: Poppins;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SuccessImage = styled.div`
  background-image: url(${CompassBall});
  width: 35vw;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  @media (max-width: 768px) {
    width: 90vw;
    height: 65vh;
  }
`;

export const SuccessContainer = styled.div`
  margin-right: 5vh;
  align-self: center;
  text-align: right;
  margin-bottom: 4vh;
`;
