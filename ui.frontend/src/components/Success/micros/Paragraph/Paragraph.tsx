import React from "react";
import { FunctionComponent, ReactNode } from "react";
import { ParagraphP, ParagraphH1 } from "./ParagraphStyled";
interface ParagraphProps {
  fontSize: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  text?: string;
  children?: ReactNode;
}
export const Paragraph: FunctionComponent<ParagraphProps> = ({
  fontSize,
  color,
  fontWeight,
  padding,
  text,
}) => {
  if (fontSize === "2rem")
    return (
      <ParagraphP
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        padding={padding}
      >
        {text}
      </ParagraphP>
    );
  else
    return (
      <ParagraphH1
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        padding={padding}
      >
        {text}
      </ParagraphH1>
    );
};
