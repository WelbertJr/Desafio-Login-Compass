import styled from "styled-components";
import imgNotebook from "../../assets/img-notebook.png";
import logoLogin from "../../assets/compassuol-logo-login.png";
export const Main = styled.div`
  display: flex;
`;
export const ContainerLeft = styled.div`
  display: flex;
  width: 50%;
  height: 937px;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  padding: 19.7rem 0 19.8rem 0;
`;

export const ContainerRight = styled(ContainerLeft)`
  padding: 1.9rem 0 0 0;
  background: url(${imgNotebook});
  background-repeat: no-repeat;
  justify-content: center;
  max-height: 100%;
`;

export const HomeIcon = styled.div`
  background: url(${logoLogin});
  background-repeat: no-repeat;
  width: 34.9rem;
  height: 9.4rem;
  margin: 0;
`;
