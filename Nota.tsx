import { render, screen } from '@testing-library/react';
import Nota from './Nota';

describe('Nota Component', () => {
  it('muestra el texto de la nota', () => {
    render(<Nota texto="Mi primera nota" />);
    expect(screen.getByText('Mi primera nota')).toBeInTheDocument();
  });
});