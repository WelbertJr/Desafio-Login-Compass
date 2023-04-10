import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1%;
  width: 27rem;
  height: 10rem;
  h1 {
    margin-top: 12%;
    font-size: 10.4rem;
    line-height: 8rem;
    @media (max-width: 1150px) {
      font-size: 8.4rem;
    }
  }
  p {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
