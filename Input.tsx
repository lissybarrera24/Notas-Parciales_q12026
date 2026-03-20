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