import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contato from '@/app/noticias/[titulo]/page';

jest.mock('next/navigation', () => ({
  useParams: () => ({
    titulo: 'next-js-15-lancamento',
    id: '456',
  }),
}));

describe('Notícia', () => {
    it('deve carregar o título da página', async() => {
        render(<Contato />);

        const titulo = await screen.findByTestId('titulo');

        expect(titulo).toBeInTheDocument();
    });
});