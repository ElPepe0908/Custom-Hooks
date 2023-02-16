import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;

    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    //   Lo regreso como objeto: {}, para luego usarlo como un objeto: const {counter}
    counter,
    increment,
    decrement,
    reset,
  };
};
