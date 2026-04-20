'use service'

export async function getNoticias() {
    const response = await fetch('https://api.news.com/noticias');
    return await response.json();
}

export async function getFiltro() {
    const response = await fetch('https://api.news.com/filtro');
    return await response.json();
}