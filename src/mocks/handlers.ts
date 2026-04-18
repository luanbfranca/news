import { http, HttpResponse } from 'msw'
import { CATEGORIAS_FILTRO, CATEGORIAS_NAV, NOTICIAS, TOPICOS_DESTAQUE } from './data-news'
 
export const handlers = [
  http.get('https://api.news.com/categorias', () => {
    return HttpResponse.json(CATEGORIAS_NAV);
  }),
  http.get('https://api.news.com/destaque', () => {
    return HttpResponse.json(TOPICOS_DESTAQUE);
  }),
  http.get('https://api.news.com/filtro', () => {
    return HttpResponse.json(CATEGORIAS_FILTRO);
  }),
  http.get('https://api.news.com/noticias', () => {
    return HttpResponse.json(NOTICIAS);
  }),
]