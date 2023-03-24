import styled from "styled-components";
export const HeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
  height: 18.4rem;
  align-items: flex-start;
  padding: 0 2% 0 2%;
`;
export const HeaderImage = styled.img`
  width: 24.8rem;
  height: 8.4rem;
  padding-top: 1.9rem;
  @media (max-width: 478px) {
    width: 40%;
    height: 8.4rem;
  }
`;

export const HeaderBodyWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
