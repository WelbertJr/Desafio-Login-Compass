import styled from "styled-components";
import userSvg from "../../assets/user.svg";
import lockSvg from "../../assets/icon-password.svg";

export const Label = styled.label`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 3rem;
  color: #e0e0e0;
`;
export const InputUser = styled.input`
  width: 100%;
  height: 6rem;
  font-family: "Poppins";
  color: #e0e0e0;
  font-weight: 400;
  font-size: 1.6rem;
  background: #26292c;
  border-radius: 5rem;
  padding-left: 2rem;
  border: 1px solid #ffffff;
  margin-top: 2.5rem;
  padding-left: 6%;
  background-image: url(${userSvg});
  background-repeat: no-repeat;
  background-position: 100%;
  background-size: contain;
  margin-top: 5%;

  &.invalid {
    border: 1px solid #e9b425;
  }

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #e0e0e0;
  }
`;
export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: column;
  height: 13.6rem;
  width: 100%;
  margin-top: 2.3rem;
  span {
    margin: 5% auto 5% auto;
  }
`;
export const InputPassword = styled(InputUser)`
  margin-top: 1.3rem;
  min-height: 6rem;
  background-image: url(${lockSvg});
`;

export const ErrorMessage = styled.span`
  font-family: "Poppins";
  font-size: 1.6rem;
  font-weight: 700;
  width: 28.3rem;
  text-align: center;
  color: #e9b425;
  margin: auto;
  @media (max-width: 280px) {
    width: 25.3rem;
    font-size: 1.4rem;
  }
`;

export const InputSearch = styled.input`
  width: 75%;
  min-height: 6rem;
  background: #26292c;
  border: 1px solid #ffffff;
  border-radius: 5rem;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  padding-left: 6%;
  color: #e0e0e0;
`;
