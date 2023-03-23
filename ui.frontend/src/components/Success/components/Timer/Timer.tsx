import React from 'react';
import { FunctionComponent } from "react";
import { Time, TimerH1, TimerP } from "./TimerStyled";
interface TimerProps{
    time: number;
}
export const Timer: FunctionComponent<TimerProps> = ({time}) => {
  return (
    <div>
      <Time>
        <TimerH1>{time}</TimerH1>
        <TimerP>seconds</TimerP>
      </Time>
    </div>
  );
}