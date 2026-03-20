# Notas-Parciales_q12026
Input.ts
import React from 'react';

interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default Input;

Nota.tsx
import React from 'react';

interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default Input;

Input.ts
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('muestra el placeholder', () => {
    render(<Input placeholder="Escribe algo" />);
    expect(screen.getByPlaceholderText('Escribe algo')).toBeInTheDocument();
  });

  it('dispara onChange al escribir', () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Escribe algo" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Escribe algo'), { target: { value: 'Hola' } });
    expect(handleChange).toHaveBeenCalled();
  });
});

Nota.tsx
import { render, screen } from '@testing-library/react';
import Nota from './Nota';

describe('Nota Component', () => {
  it('muestra el texto de la nota', () => {
    render(<Nota texto="Mi primera nota" />);
    expect(screen.getByText('Mi primera nota')).toBeInTheDocument();
  });
});

Input.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('muestra el placeholder', () => {
    render(<Input placeholder="Escribe algo" />);
    expect(screen.getByPlaceholderText('Escribe algo')).toBeInTheDocument();
  });

  it('dispara onChange al escribir', () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Escribe algo" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Escribe algo'), { target: { value: 'Hola' } });
    expect(handleChange).toHaveBeenCalled();
  });
});

App.tsx
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

Vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});

Tconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  },
  "include": ["src"]
}

Package.json
{
  "name": "Notas-Parciales_q12026",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest run --coverage"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vitest": "^1.4.0",
    "jsdom": "^22.0.0"
  }
}



