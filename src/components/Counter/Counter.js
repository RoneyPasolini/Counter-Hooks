import useCounter from "../../hooks/useCounter";
import styles from "./styles";

const Counter = ({ step, initialValue }) => {
  const [value, increment, decrement] = useCounter({ step, initialValue });

  return (
    <div style={styles.container}>
      <button onClick={decrement} style={styles.button}>
        -
      </button>
      <div style={styles.value}>{value}</div>
      <button onClick={increment} style={styles.button}>
        +
      </button>
    </div>
  );
};

export default Counter;
