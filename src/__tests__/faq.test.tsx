import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contato from '@/app/faq/page';

describe('FAQ', () => {
    it('deve carregar o título da página', async() => {
        render(<Contato />);

        const titulo = await screen.findByTestId('titulo');

        expect(titulo).toBeInTheDocument();
    });
});