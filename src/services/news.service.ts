'use service'

import { Noticia } from '@/models/noticia';

export async function getNoticias(): Promise<Noticia[]> {
    const response = await fetch('https://api.news.com/noticias');
    return await response.json();
}

export async function getNoticia(slug: string): Promise<Noticia> {
    const response = await fetch('https://api.news.com/noticias');
    const jsonRes = await response.json();
    return jsonRes.find((noticia: Noticia) => noticia.slug === slug);
}

export async function getDestaques(): Promise<string[]> {
    const response = await fetch('https://api.news.com/destaque');
    return await response.json();
}

export async function getFiltro(): Promise<string[]>  {
    const response = await fetch('https://api.news.com/filtro');
    return await response.json();
}