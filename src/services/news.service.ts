'use service'

import { Noticia } from '@/models/noticia';

export async function getNoticias(): Promise<Noticia[]> {
    const response = await fetch('https://api.news.com/noticias');
    return await response.json();
}

export async function getNoticia(slug: string): Promise<Noticia> {
    const response = await fetch('https://api.news.com/noticias');
    const jsonRes = await response.json();
    return jsonRes.filter((noticia: string) => noticia === slug);
}

export async function getFiltro() {
    const response = await fetch('https://api.news.com/filtro');
    return await response.json();
}