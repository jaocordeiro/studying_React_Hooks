import { useState, useEffect } from "react";

export function Effect() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda vez que o componente atualizada
  // useEffect (() => {
  //   console.log('componentDidUpdate');
  // });

  // componenteDidMount - executa apenas 1x, não importa a atualização que ocorra na tela.
  useEffect(() => {
    console.log("componenteDidMount");

    //componentWillMount - limpa os lixos do componente quando for desmontar ele, para não focar dados anteriores por quando sainda tela e voltar ter uma info do passado no componente.
    return () => {
      console.log("Limpando lixo do componente");
    };
  }, []);

  // componenteDidMount - executa sempre que o valor passado em sua dependencia atualizar, podendo ser um state ou uma variavél.
  useEffect(() => {
    console.log("componenteDidMount-Dependencia");
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Atualiza</button>
    </div>
  );
}
