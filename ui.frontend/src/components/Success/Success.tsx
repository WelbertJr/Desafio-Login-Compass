import { FunctionComponent } from "react";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./micros/Paragraph/Paragraph";
import { SuccessBody, SuccessContainer, SuccessImage } from "./SuccessStyled";
import { Footer } from "./components/Footer/Footer";
import React from "react";

export const Success: FunctionComponent = () => {
  return (
    <>
      <Header />
      <SuccessBody>
        <SuccessImage />
        <SuccessContainer>
          <Paragraph
            fontSize='2vw'
            color=' #c12d18'
            text='Our mission is'
          ></Paragraph>
          <Paragraph
            fontSize='1vw'
            color=' #222222'
            text='Nossa missão é'
          ></Paragraph>
          <Paragraph
            fontSize='3.52rem'
            color=' #c12d18'
            text='to transform the world'
          ></Paragraph>
          <Paragraph
            fontSize='1vw'
            color=' #222222'
            text='transformar o mundo'
          ></Paragraph>
          <Paragraph
            fontSize='2.2rem'
            color=' #c12d18'
            text='building digital experiences'
          ></Paragraph>
          <Paragraph
            fontSize='1vw'
            color=' #222222'
            text='construindo experiências digitais'
          ></Paragraph>
          <Paragraph
            fontSize='2.2rem'
            color=' #c12d18'
            text='that enable our clients growth'
          ></Paragraph>
          <Paragraph
            fontSize='1vw'
            color=' #222222'
            text='que permitam o crescimento dos nossos clientes'
          ></Paragraph>
        </SuccessContainer>
      </SuccessBody>
      <Footer />
    </>
  );
};
