import { Main, Main2, MSG, MainText, WarningText } from "./PopUpStyled";
import { Button } from "../../../Buttons/Buttons";
import React, { useEffect, useState } from "react";

export const PopUp = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let intervalId: any;
    let startCountdown = false;

    if (!startCountdown) {
      startCountdown = true;
      intervalId = setInterval(() => {
        setCountdown((state) => state - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, []);

  function deleter() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPassword");
    window.location.reload();
  }

  return (
    <Main>
      <MainText>Informações de login detectadas em local storage</MainText>
      <Main2>
        <MSG>
          <WarningText>Login automatico em&nbsp;{countdown}</WarningText>
        </MSG>
        <Button type='button' onClick={deleter} text='Deslogar' />
      </Main2>
    </Main>
  );
};
