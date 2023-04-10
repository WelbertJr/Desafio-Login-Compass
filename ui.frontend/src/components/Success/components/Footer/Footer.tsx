import {
  FooterBody,
  FooterP,
  FooterTimer,
  Refresh,
  FooterButtons,
} from "./FooterStyled";
import { Button } from "../../../Buttons/Buttons";
import { useHistory } from "react-router-dom";
import { useState, useRef, useEffect, FunctionComponent } from "react";
import { Timer } from "../Timer/Timer";
import React from "react";
interface FooterProps {
  isLoggedIn: boolean;
}
export const Footer: FunctionComponent<FooterProps> = () => {
  const [time, setTime] = useState(600);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const history = useHistory();

  useEffect(() => {
    clearTimeout(timeout.current!);
    const timer = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);
    timeout.current = timer;
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [time]);
  useEffect(() => {
    if (time === 0) {
      history.push("./home.html");
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
            history.push({
              pathname: "./search-page.html",
              state: { isLoggedIn: true },
            });
            document.title = "Compass - Search";
          }}
          type='button'
        />
        <Button
          className='logout'
          text='Logout'
          onClick={() => {
            history.push("./home.html");
          }}
          type='button'
        />
      </FooterButtons>
    </FooterBody>
  );
};
