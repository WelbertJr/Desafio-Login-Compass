import { FunctionComponent, useEffect } from "react";
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
import { useHistory, useLocation } from "react-router-dom";
import { isAuthoring } from "../../utils/isAuthoring";

export interface SuccessPageProps {
  successLogo?: { src: string };
  successImage?: { src: string };
  successColorTitleMultifield?: string;
  successTexts?: MultifieldTexts[];
}
export interface MultifieldTexts {
  successTitleMultifield: string;
  successColorTitleMultifield: string;
  successDescriptionMultifield: string;
  checkboxMultifield?: boolean;
}
interface LocationProps {
  state: { isLoggedIn: boolean };
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
}) => {
  const history = useHistory();
  const { state: location } = useLocation<LocationProps>();
  useEffect(() => {
    if (isAuthoring()) {
      return;
    } else {
      if (!location) {
        history.push("./error-page-401.html");
        document.title = "Error Page - 401";
      }
    }
  }, [history, location]);

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
