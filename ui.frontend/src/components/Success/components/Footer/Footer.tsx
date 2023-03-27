import {
  FooterBody,
  FooterP,
  FooterTimer,
  Refresh,
  FooterButtons,
} from "./FooterStyled";
import { Button } from "../../../Buttons/Buttons";
import { useHistory } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Timer } from "../Timer/Timer";
import React from "react";

export function Footer() {
  const [time, setTime] = useState(600);
  const timeout = useRef<any>(0);
  let history = useHistory();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);
    if (time === 0) {
      history.push("/content/reactapp/us/en/home.html");
    }
  }, [time, history]);
  return (
    <FooterBody>
      <FooterP>
        <p>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa.
        </p>
        <p>
          Deixe-a aberta em segundo plano e abra uma nova janela para continuar
          a navegar.
        </p>
      </FooterP>
      <FooterTimer>
        <Refresh>
          <p>Application</p>
          <p>refresh in </p>
        </Refresh>
        <Timer time={time} />
      </FooterTimer>

      <FooterButtons>
        <Button
          text='Acessar Busca'
          onClick={() => {
            history.push("/content/reactapp/us/en/search-page.html");
          }}
          type='button'
        />
        <Button
          className='logout'
          text='Logout'
          onClick={() => {
            history.push("/content/reactapp/us/en/home.html");
          }}
          type='button'
        />
      </FooterButtons>
    </FooterBody>
  );
}
