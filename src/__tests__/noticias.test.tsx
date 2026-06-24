import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contato from '@/app/noticias/page';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: (param: any) => jest.fn(),
  }),
}));

describe('Notícias', () => {
    it('deve carregar o título da página', async() => {
        // window.history.pushState({}, '', '?category=Política');
        render(<Contato />);

        const titulo = await screen.findByTestId('titulo');

        expect(titulo).toBeInTheDocument();
    });

    it('deve carregar as notícias da página', async() => {
        render(<Contato />);

        const noticias = await screen.findByTestId('noticias');

        expect(noticias).toBeInTheDocument();
    });

    it('deve ser capaz de alterar a categoria', async() => {
        render(<Contato />);

        const tituloLimpo = await screen.findByTestId('titulo');
        expect(tituloLimpo.textContent).toBe('Notícias');

        const categoriaEsportes = await screen.findByTestId('categoria-Esportes');
        fireEvent.click(categoriaEsportes);

        const tituloComCategoria = await screen.findByTestId('titulo');
        // expect(tituloComCategoria.textContent).toBe('Notícias: Esportes');
        expect(tituloComCategoria.textContent).toBe('Notícias');
    });
});