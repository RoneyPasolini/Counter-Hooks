import { useCallback, useState } from "react";

const useCounter = ({ step, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const decrement = useCallback(() => {
    setValue((previous) => {
      return previous - step;
    });
  }, [step]);

  const increment = useCallback(() => {
    setValue((previous) => {
      return previous + step;
    });
  }, [step]);

  return [value, increment, decrement];
};

export default useCounter;
