import { Noticia } from '@/models/noticia';

export async function getNoticias(): Promise<Noticia[]> {
    const response = await fetch('https://api.news.com/noticias');
    return response.json();
}

export async function getNoticia(slug: string): Promise<Noticia> {
    const response = await fetch('https://api.news.com/noticias');
    const jsonRes = await response.json();
    return jsonRes.find((noticia: Noticia) => noticia.slug === slug);
}

export async function getDestaques(): Promise<string[]> {
    const response = await fetch('https://api.news.com/destaque');
    return response.json();
}

export async function getFiltro(): Promise<string[]>  {
    const response = await fetch('https://api.news.com/filtro');
    return response.json();
}