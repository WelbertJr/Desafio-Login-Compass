import React, { FunctionComponent } from "react";
import { ContainerGray } from "../../LoginPage/Components/ContainerGray/ContainerGray";
import {
  ContainerError,
  ErrorNumber,
  ErrorParagraph,
} from "../ErrorPagesStyled";
import { Button } from "../../Buttons/Buttons";
import { useHistory } from "react-router-dom";
interface ErrorPageProps {
  errorTitle: number;
  errorParagraph: string;
  errorButtonColor: string;
}
const ErrorPage401: FunctionComponent<ErrorPageProps> = ({
  errorTitle,
  errorParagraph,
  errorButtonColor,
}) => {
  let history = useHistory();
  return (
    <ContainerGray width='100%'>
      <ContainerError>
        <ErrorNumber>{errorTitle ? errorTitle : "401"}</ErrorNumber>
        <ErrorParagraph>
          {errorParagraph
            ? errorParagraph
            : `Esta página não existe. \nVamos encontrar um lugar melhor para você ir.`}
        </ErrorParagraph>
        <Button
          type='button'
          text='Voltar para página inicial'
          bgColorError={errorButtonColor}
          onClick={() => {
            history.push("/content/reactapp/us/en/home.html");
          }}
        />
      </ContainerError>
    </ContainerGray>
  );
};
export default ErrorPage401;
