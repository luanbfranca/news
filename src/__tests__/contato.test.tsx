import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Contato from '@/app/contato/page';

describe('Contato', () => {
    it('deve carregar o título da página', async() => {
        render(<Contato />);

        const titulo = await screen.findByTestId('titulo');

        expect(titulo).toBeInTheDocument();
    });

    // it('deve chamar o alerta com os dados do formulário ao clicar no submit', async() => {
    //     const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        
    //     render(<Contato />);

    //     const name = await screen.findByLabelText(/nome/i);
    //     fireEvent.change(name, {target: {value: 'Teste'}});
    //     const email = await screen.findByLabelText(/e-mail/i);
    //     fireEvent.change(email, {target: {value: 'teste@teste.com'}});
    //     const mensagem = await screen.findByLabelText(/mensagem/i);
    //     fireEvent.change(mensagem, {target: {value: 'Mensagem teste'}});

    //     const submit = await screen.findByTestId('submit');
    //     fireEvent.click(submit);

    //     expect(alertMock).toHaveBeenCalledTimes(1);
    //     alertMock.mockRestore();
    // });
});