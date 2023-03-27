import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: block;
  max-width: 379px;
`;
export const Main2 = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MSG = styled.label`
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  line-height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
  }
`;
export const MainText = styled.p`
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  line-height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const WarningText = styled.label`
  font-family: "Poppins";
  font-weight: 700;
  color: #e9b425;
`;
export const Btncontainer = styled.div`
  width: 100%;
  height: 15vh;
  @media (max-width: 300px) {
    height: 5%;
  }
`;
