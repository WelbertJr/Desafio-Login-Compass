import { FunctionComponent } from "react";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./micros/Paragraph/Paragraph";
import {
  SuccessMain,
  SuccessText,
  SuccessContainer,
  SuccessImage,
  ContainerSuccessImage,
} from "./SuccessStyled";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import BgSuccessImage from "../../assets/uol-ball-transparent.png";
import IconSuccess from "../../assets/compassuol-logo-success.png";
import { LoginPageProps } from "../LoginPage/LoginPage";
import { useHistory } from "react-router-dom";
interface SuccessPageProps {
  successLogo?: { src: string };
  successImage?: { src: string };
  successColorTitleMultifield?: string;
  successTexts?: MultifieldTexts[];
  location?: {
    state: LoginPageProps;
  };
}
interface MultifieldTexts {
  successTitleMultifield: string;
  successColorTitleMultifield: string;
  successDescriptionMultifield: string;
  checkboxMultifield: boolean;
}

const defaultTexts = [
  { successTitleMultifield: "Our mission is" },
  { successDescriptionMultifield: "Nossa missão é" },
  { successTitleMultifield: "to transform the world" },
  { successDescriptionMultifield: "transformar o mundo" },
  { successTitleMultifield: "building digital experiences" },
  { successDescriptionMultifield: "construindo experiências digitais" },
  { successTitleMultifield: "that enable our client's growth" },
  {
    successDescriptionMultifield:
      "que permitam o crescimento dos nossos clientes",
  },
  { successColorTitleMultifield: "#C12D18" },
  { checkboxMultifield: false },
];
const SuccessPage: FunctionComponent<SuccessPageProps> = ({
  successImage = { src: BgSuccessImage },
  successLogo = { src: IconSuccess },
  successTexts = defaultTexts,
  location,
}) => {
  const history = useHistory();
  const isLoggedIn =
    (location && location.state && location.state.isLoggedIn) ??
    (localStorage.getItem("userName") != null &&
      localStorage.getItem("userPassword") != null);
  if (!isLoggedIn) {
    history.push("./error-page-401.html");
    document.title = "Error Page - 401";
  }
  return (
    <SuccessContainer>
      <Header logo={successLogo && successLogo.src} />
      <SuccessMain>
        <ContainerSuccessImage>
          <SuccessImage
            src={successImage && successImage.src}
            alt='Success Image'
          />
        </ContainerSuccessImage>
        <SuccessText>
          {successTexts.map((item, index) => (
            <div key={index}>
              <Paragraph
                fontSize={item.checkboxMultifield ? "2.8rem" : "5rem"}
                color={item.successColorTitleMultifield}
                text={item.successTitleMultifield}
                padding-bottom='0.8rem'
                fontWeight='700'
              />
              <Paragraph
                fontSize='2rem'
                color=' #222222'
                text={item.successDescriptionMultifield}
                fontWeight='400'
              />
            </div>
          ))}
        </SuccessText>
      </SuccessMain>
      <Footer isLoggedIn={true} />
    </SuccessContainer>
  );
};

export default SuccessPage;
