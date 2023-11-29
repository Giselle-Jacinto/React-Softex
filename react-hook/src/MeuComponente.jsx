// src/MeuComponente.jsx
import HOOK, { useState } from 'react';
import './MeuComponente.css';

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container">
      <p className="contador">Contador: {contador}</p>
      <button className="botao" onClick={incrementarContador}>
        Incrementar
      </button>
    </div>
  );
};

export default MeuComponente;
