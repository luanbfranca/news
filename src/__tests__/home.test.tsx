import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/home/page';

describe('Home', () => {
    it('deve carregar o conteúdo principal', async() => {
        render(<Home />);

        const banner = await screen.findByTestId('main-banner');

        expect(banner).toBeInTheDocument();
    });

    it('deve carregar o conteúdo secundário', async() => {
        render(<Home />);

        const banner = await screen.findByTestId('secondary-banners');

        expect(banner).toBeInTheDocument();
    });

    it('deve carregar o carousel', async() => {
        render(<Home />);

        const carousel = await screen.findByTestId('carousel');

        expect(carousel).toBeInTheDocument();
    });

    it('deve carregar as webstories', async() => {
        render(<Home />);

        const webstories = await screen.findByTestId('webstories');

        expect(webstories).toBeInTheDocument();
    });

    it('deve carregar o review', async() => {
        render(<Home />);

        const review = await screen.findByTestId('review');

        expect(review).toBeInTheDocument();
    });

    it('deve carregar as últimas notícias', async() => {
        render(<Home />);

        const news = await screen.findByTestId('latest-news');

        expect(news).toBeInTheDocument();
    });
});
