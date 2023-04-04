import React, { useState, useEffect } from "react";
import { CityState } from "../Weather/WeatherStyled";
import { ClockWrapper } from "./ClockStyled";

export const Clock = () => {
  const [year, setYear] = useState<Number>();
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState<Number>();
  const [weekDay, setWeekDay] = useState<string>("");
  const [monthString, setMonthString] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [clockState, setClockState] = useState<string>("");
  const [clock, setClock] = useState<Boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDate = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    getMonth(month);
    setDay(today.getDate());
    let currentDay = today.getDay();
    getWeekDay(currentDay);
  };
  const getWeekDay = (week: number) => {
    switch (week) {
      case 0:
        setWeekDay("Domingo");
        break;
      case 1:
        setWeekDay("Segunda-feira");
        break;
      case 2:
        setWeekDay("Terça-feira");
        break;
      case 3:
        setWeekDay("Quarta-feira");
        break;
      case 4:
        setWeekDay("Quinta-feira");
        break;
      case 5:
        setWeekDay("Sexta-feira");
        break;
      case 6:
        setWeekDay("Sábado");
        break;
    }
  };
  const getMonth = (month: number) => {
    switch (month) {
      case 1:
        setMonthString("Janeiro");
        break;
      case 2:
        setMonthString("Fevereiro");
        break;
      case 3:
        setMonthString("Março");
        break;
      case 4:
        setMonthString("Abril");
        break;
      case 5:
        setMonthString("Maio");
        break;
      case 6:
        setMonthString("Junho");
        break;
      case 7:
        setMonthString("Julho");
        break;
      case 8:
        setMonthString("Agosto");
        break;
      case 9:
        setMonthString("Setembro");
        break;
      case 10:
        setMonthString("Outubro");
        break;
      case 11:
        setMonthString("Novembro");
        break;
      case 12:
        setMonthString("Dezembro");
        break;
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      if (!time) {
        return;
      }
      setClockState(time.substring(0, 5));
      setClock(true);
    }, 1000);
    getDate();

    return () => {
      clearTimeout(timerId);
    };
  }, [time, getDate, setClock, setClockState, setTime]);

  return (
    <>
      {!clock ? (
        <CityState>Carregando...</CityState>
      ) : (
        <ClockWrapper>
          <h1>{clockState}</h1>
          <p>
            <>
              {weekDay}, {day} de {monthString} de {year}
            </>
          </p>
        </ClockWrapper>
      )}
    </>
  );
};

export default Clock;
