import styled from "styled-components";

interface ContainerProps {
  width: string;
}
const isAuthoring = () => {
  const href =
    window.location !== window.parent.location
      ? document.referrer
      : document.location.href;

  return href.includes("/editor.html");
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${isAuthoring() ? "93.7rem" : "100vh"};
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
