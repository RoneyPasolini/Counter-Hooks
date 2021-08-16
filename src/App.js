import { Counter } from "./components/Counter";

const App = () => {
  const contadores = [
    { step: 1, initialValue: 0 },
    { step: 2, initialValue: 0 },
    { step: 3, initialValue: 0 },
  ];

  return (
    <div>
      {contadores.map((contador, key) => (
        <Counter {...contador} key={"contador-" + key} /> //Retorno automatico
      ))}
    </div>
  );
};
export default App;
