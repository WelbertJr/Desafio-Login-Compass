import styled from "styled-components";
import imgNotebook from "../../assets/img-notebook.png";
import logoLogin from "../../assets/compassuol-logo-login.png";
export const Main = styled.div`
  display: flex;
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 937px;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  padding: 19.7rem 55.8rem 19.8rem 28.7rem;
`;

export const TitleLogin = styled.h1`
  font-family: "Poppins";
  font-size: 6rem;
  font-weight: 400;
  color: #e0e0e0;
`;

export const ParagraphLogin = styled.p`
  font-family: "Poppins";
  font-size: 1.6rem;
  font-weight: 400;
  color: #e0e0e0;
  width: 30.1rem;
  height: 5.2rem;
  margin-top: 0.3rem;
`;
export const ContainerRight = styled(ContainerLeft)`
  padding: 1.9rem 0 0 0;
  background: url(${imgNotebook});
  background-repeat: no-repeat;
  justify-content: center;
  flex-direction: row;
  max-height: 100%;
`;

export const HomeIcon = styled.div`
  background: url(${logoLogin});
  background-repeat: no-repeat;
  width: 34.9rem;
  height: 9.4rem;
  margin: 0;
`;
