export interface Noticias {
  noticias: Noticia[];
}

export interface Noticia {
    slug: string,
    title: string,
    excerpt: string,
    content: string,
    imageUrl: string,
    imageAlt: string,
    category: string,
    date: string,
    section: string,
}
