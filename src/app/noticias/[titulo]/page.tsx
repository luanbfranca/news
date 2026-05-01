'use client';

import { Noticia } from '@/models/noticia';
import { getNoticia } from '@/services/news.service';
import { CardMedia, Typography, useMediaQuery } from '@mui/material';
import CardMUI from '@mui/material/Card';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NoticiaPage() {
    const isMobile = useMediaQuery('(max-width:640px)');
    const params = useParams<{ titulo: string }>();
    const [noticia, setNoticia] = useState<Noticia>();

    useEffect(() => {
        const fetchData = async () => {
            setNoticia(await getNoticia(params.titulo));
        };
        fetchData();
    }, []);

    return (
        <>
            <Typography variant="h5" fontWeight="bold" gutterBottom component="div">
                {noticia?.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: 'text.secondary', mb: 2 }}>
                {noticia?.category} • {noticia?.date}
            </Typography>
            <CardMUI sx={{ borderRadius: '8px', height: '100%', mb: 3 }}>
                <CardMedia sx={{ height: isMobile ? 200 : 400 }} image={noticia?.imageUrl} title={noticia?.imageAlt}></CardMedia>
            </CardMUI>
            <Typography>{noticia?.content}</Typography>
        </>
    );
}
