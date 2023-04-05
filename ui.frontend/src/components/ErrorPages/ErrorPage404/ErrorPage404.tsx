import React, { FunctionComponent, useLayoutEffect } from "react";
import { ContainerGray } from "../../LoginPage/Components/ContainerGray/ContainerGray";
import {
  ContainerError,
  ErrorNumber,
  ErrorParagraph,
} from "../ErrorPagesStyled";
import { Button } from "../../Buttons/Buttons";
import { useHistory, useLocation } from "react-router-dom";
interface ErrorPage404Props {
  errorTitle: number;
  errorParagraph: string;
  errorButtonColor: string;
}
export const ErrorPage404: FunctionComponent<ErrorPage404Props> = ({
  errorTitle,
  errorParagraph,
  errorButtonColor,
}) => {
  const history = useHistory();
  const location = useLocation();
  useLayoutEffect(() => {
    const regex = /^\/content\/reactapp\/us\/en\/(home|search-page)\.html$/;
    if (!regex.test(location.pathname)) {
      console.log("Redirecting to 404 page");
      history.push("/content/reactapp/us/en/error-page-404.html");
    }
    document.title = "Compass - Login";
  }, [location, history]);
  return (
    <ContainerGray width='100%'>
      <ContainerError>
        <ErrorNumber>{errorTitle ? errorTitle : "404"}</ErrorNumber>
        <ErrorParagraph>
          {errorParagraph
            ? errorParagraph
            : "Esta página não existe. \nVamos encontrar um lugar melhor para você ir."}
        </ErrorParagraph>
        <Button
          type='button'
          text='Voltar para página inicial'
          bgColorError={errorButtonColor}
          onClick={() => {
            history.push("./home.html");
          }}
        />
      </ContainerError>
    </ContainerGray>
  );
};
