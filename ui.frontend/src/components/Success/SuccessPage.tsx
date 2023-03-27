import { FunctionComponent } from "react";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./micros/Paragraph/Paragraph";
import {
  SuccessMain,
  SuccessText,
  SuccessContainer,
  SuccessImage,
} from "./SuccessStyled";
import { Footer } from "./components/Footer/Footer";
import React from "react";

const SuccessPage: FunctionComponent = () => {
  return (
    <SuccessContainer>
      <Header />
      <SuccessMain>
        <SuccessImage />
        <SuccessText>
          <Paragraph
            fontSize='2.8rem'
            color=' #c12d18'
            text='Our mission is'
            padding-bottom='0.3rem'
            fontWeight='700'
          ></Paragraph>
          <Paragraph
            fontSize='2rem'
            color=' #222222'
            text='Nossa missão é'
            fontWeight='400'
          ></Paragraph>
          <Paragraph
            fontSize='5rem'
            color=' #c12d18'
            text='to transform the world'
            padding-bottom='0.8rem'
            fontWeight='700'
          ></Paragraph>
          <Paragraph
            fontSize='2rem'
            color=' #222222'
            text='transformar o mundo'
            fontWeight='400'
          ></Paragraph>
          <Paragraph
            fontSize='5rem'
            color=' #c12d18'
            text='building digital experiences'
            fontWeight='700'
          ></Paragraph>
          <Paragraph
            fontSize='2rem'
            color=' #222222'
            text='construindo experiências digitais'
            fontWeight='400'
          ></Paragraph>
          <Paragraph
            fontSize='5rem'
            color=' #c12d18'
            text='that enable our clients growth'
            fontWeight='700'
          ></Paragraph>
          <Paragraph
            fontSize='2rem'
            color=' #222222'
            text='que permitam o crescimento dos nossos clientes'
            fontWeight='400'
          ></Paragraph>
        </SuccessText>
      </SuccessMain>
      <Footer />
    </SuccessContainer>
  );
};

export default SuccessPage;
