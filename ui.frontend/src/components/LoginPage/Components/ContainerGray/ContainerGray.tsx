import React, { FunctionComponent, ReactNode } from "react";
import { Container } from "./ContainerGrayStyled";
interface ContainerGrayProps {
  width: string;
  children: ReactNode;
}
export const ContainerGray: FunctionComponent<ContainerGrayProps> = ({
  width,
  children,
}) => {
  return <Container width={width}>{children}</Container>;
};
