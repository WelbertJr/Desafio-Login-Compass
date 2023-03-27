import React from "react";
import { ContainerGray } from "../../LoginPage/Components/ContainerGray/ContainerGray";
import {
  ContainerError,
  ErrorNumber,
  ErrorParagraph,
} from "../ErrorPagesStyled";
import { Button } from "../../Buttons/Buttons";
import { useHistory } from "react-router-dom";
export const ErrorPage401 = () => {
  let history = useHistory();
  return (
    <ContainerGray width='100%'>
      <ContainerError>
        <ErrorNumber>401</ErrorNumber>
        <ErrorParagraph>
          Esta página não existe. <br /> Vamos encontrar um lugar melhor para
          você ir.
        </ErrorParagraph>
        <Button
          type='button'
          text='Voltar para página inicial'
          onClick={() => {
            history.push("/content/reactapp/us/en/home.html");
          }}
        />
      </ContainerError>
    </ContainerGray>
  );
};
