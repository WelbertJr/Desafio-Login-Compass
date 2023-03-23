import styled from "styled-components";

interface TextParagraphProps {
  fontSize: string;
  color: string;
  margin?: string;
  padding?: string;
}

export const ParagraphText = styled.p<TextParagraphProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-family: "Poppins";
`;