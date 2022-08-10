import React, { useCallback, useState } from "react";
import P from "prop-types";

// eslint-disable-next-line react/prop-types
const Button = React.memo(function Button({ incrementButton }) {
  console.log("render button");
  return <button onClick={() => incrementButton(10)}>contador</button>;
});

Button.prototype = {
  incrementButton: P.func,
};

export function Callback() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
    //como é utilizado useState e pegamos setCounter dele, podemos utilizar dentro dele uma func de callback
    //dentro do meu c vem o valor de counter e em consequencia não prtecisa usar ele como dependencia dentro do do arr
    //sendo assim pegamos o valor atual do counter e no retorno dela fazemos o valor de counter + incrementButton, então
    //como o componente está salvo na memoria usando o memo, e as depen está vazia a func renderiza apenas 1x.
  }, []);

  console.log("render function");

  return (
    <div className="App">
      <p>Contagem</p>
      <h1>{counter}</h1>
      <Button incrementButton={handleIncrementCounter} />
    </div>
  );
}
