import styled from "styled-components";

export const CityState = styled.p`
  font-size: 1.4rem;
  padding-top: 2rem;
  margin-left: 0;
`;
export const WeatherDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WeatherImage = styled.img`
  width: 5rem;
  background: linear-gradient(
    rgba(51, 56, 61, 0.3) 0%,
    rgba(28, 29, 32, 0.3) 50%
  );
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 8vw;
  }
`;

export const WeatherTemp = styled.p`
  font-size: 5.7rem;
  font-weight: 700;
  margin-left: 1rem;
  @media (max-width: 1150px) {
    font-size: 3.7rem;
  }
`;
