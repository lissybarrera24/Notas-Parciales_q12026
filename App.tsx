import React, { useState } from 'react';
import Input from './components/Input';
import Nota from './components/Nota';

const App: React.FC = () => {
  const [notas, setNotas] = useState<string[]>([]);
  const [texto, setTexto] = useState('');

  const agregarNota = () => {
    if (texto.trim() !== '') {
      setNotas([...notas, texto]);
      setTexto('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Notas Parciales</h1>
      <Input placeholder="Escribe tu nota" onChange={(e) => setTexto(e.target.value)} />
      <button onClick={agregarNota}>Agregar Nota</button>
      <div style={{ marginTop: '20px' }}>
        {notas.map((nota, index) => (
          <Nota key={index} texto={nota} />
        ))}
      </div>
    </div>
  );
};

export default App;