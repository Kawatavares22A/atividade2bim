import { useState } from "react";

export function App() {
  const [valor, setValor] = useState(100);
  const [visivel, setVisivel] = useState(true);

  function aumentar() {
    setValor(valor + 100);
  }

  function alternarVisibilidade() {
    if (visivel === true) {
      setVisivel(false);
    } else {
      setVisivel(true);
    }
  }

  return (
    <div>
      <h1>Valor: {valor}</h1>
      <button onClick={aumentar}>Aumentar +100</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={alternarVisibilidade}>
          {visivel ? "Esconder" : "Mostrar"}
        </button>

        {visivel ? <p>Texto visível porque o estado é true.</p> : null}
      </div>
    </div>
  );
}
