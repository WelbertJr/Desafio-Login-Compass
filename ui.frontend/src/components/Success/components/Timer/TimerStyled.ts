import styled from "styled-components";
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
  margin-right: 5vh;
  line-height: 1;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;

export const TimerH1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  @media (max-height: 820px) {
    font-size: 4rem;
  }
  @media (max-width: 1150px) {
    font-size: 3rem;
  }
  @media (max-height: 770px) {
    font-size: 2rem;
  }
`;
export const TimerP = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
`;
