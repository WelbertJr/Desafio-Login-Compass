import styled from "styled-components";
interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: 937px;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
