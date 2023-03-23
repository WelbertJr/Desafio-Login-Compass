import styled from "styled-components";
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins;
  height: 12.5vh;
  align-items: flex-start;
  padding-top: 2.5vh;
`;
export const HeaderImage = styled.img`
  min-width: 24.8rem;
  height: 8.4rem;
`;
export const HeaderBodyTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  #headerBodyTimeText {
    font-size: 5rem;
    font-weight: 700;
    line-height: 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBodyWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 4vh;
  @media (max-width: 768px) {
    margin-right: 2vh;
  }
`;