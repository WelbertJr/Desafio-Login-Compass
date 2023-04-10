import { ReactNode } from "react";
import styled from "styled-components";

interface TextParagraphProps {
  fontSize: string;
  color?: string;
  fontWeight?: string;
  padding?: string;
  children: ReactNode;
}

export const ParagraphP = styled.p<TextParagraphProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  font-family: "Poppins";
  @media (max-width: 1133px) {
    font-size: 1.7rem;
  }
  @media (max-width: 1075px) {
    font-size: 1.4rem;
  }
  @media (max-width: 773px) {
    font-size: 1rem;
  }

  @media (max-height: 770px) {
    font-size: 1rem;
  }
  @media (max-height: 698px) {
    font-size: 1.3rem;
  }
`;

export const ParagraphH1 = styled.h1<TextParagraphProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : "#c12d18")};
  padding: ${({ padding }) => padding};
  font-family: "Poppins";
  @media (max-width: 1320px) {
    font-size: 4rem;
  }
  @media (max-width: 1133px) {
    font-size: 3.7rem;
  }
  @media (max-width: 1075px) {
    font-size: 3.4rem;
  }
  @media (max-width: 1015px) {
    font-size: 3rem;
  }
  @media (max-width: 936px) {
    font-size: 2.7rem;
  }
  @media (max-width: 871px) {
    font-size: 2.4rem;
  }
  @media (max-width: 808px) {
    font-size: 2.2rem;
  }

  @media (max-height: 770px) {
    font-size: 4rem;
  }
  @media (max-height: 754px) {
    font-size: 4rem;
  }
  @media (max-height: 698px) {
    font-size: 3.5rem;
  }
  @media (max-height: 600px) {
    font-size: 3rem;
  }
  @media (max-height: 577.33px) {
    font-size: 2.6rem;
  }
  @media (max-height: 535px) {
    font-size: 2rem;
  }
`;
