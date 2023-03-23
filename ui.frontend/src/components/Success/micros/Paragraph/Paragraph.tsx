import React from 'react';
import { FunctionComponent, ReactNode } from "react";
import { ParagraphText } from "./ParagraphStyled";
interface ParagraphProps {
  fontSize: string;
  color: string;
  margin?: string;
  padding?: string;
  text: string;
  children?: ReactNode;
}
export const Paragraph: FunctionComponent<ParagraphProps> = ({
  fontSize,
  color,
  margin,
  padding,
  text,
}) => {
  return (
    <ParagraphText
      fontSize={fontSize}
      color={color}
      margin={margin}
      padding={padding}
    >
      {text}
    </ParagraphText>
  );
};