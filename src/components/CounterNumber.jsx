import React from "react";
import { useSelector } from "react-redux";

const CounterNumber = () => {
  const { counterVal } = useSelector((state) => state.counter);
  return <> counter - {counterVal}</>;
};

export default CounterNumber;
