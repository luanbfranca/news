'use client';

import { Noticia } from '@/models/noticia';
import { getNoticia } from '@/services/news.service';
import { CardMedia, Skeleton, Typography } from '@mui/material';
import CardMUI from '@mui/material/Card';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NoticiaPage() {
    const params = useParams<{ titulo: string }>();
    const [noticia, setNoticia] = useState<Noticia>();

    useEffect(() => {
        const fetchData = async () => {
            setNoticia(await getNoticia(params.titulo));
        };
        fetchData();
    }, [params.titulo]);

    return (
        <>
            <section>
                <Typography variant="h5" fontWeight="bold" gutterBottom component="h5">
                    {noticia ? noticia?.title : <Skeleton variant="rounded" animation="wave" />}
                </Typography>
                <article>
                    <Typography variant="subtitle1" gutterBottom component="p" color="text.secondary" mb={2}>
                        {noticia ? noticia?.category : <Skeleton variant="rounded" animation="wave" width={300} sx={{ display: 'inline-block' }} />} •{' '}
                        {noticia ? noticia?.date : <Skeleton variant="rounded" animation="wave" width={180} sx={{ display: 'inline-block' }} />}
                    </Typography>
                    {noticia ? (
                        <CardMUI sx={{ borderRadius: '8px', height: '100%', mb: 3 }}>
                            <CardMedia sx={{ height: { xs: 200, sm: 400 } }} image={noticia?.imageUrl} title={noticia?.imageAlt}></CardMedia>
                        </CardMUI>
                    ) : (
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ mb: 3, height: { xs: 200, sm: 400 } }} />
                    )}
                    <Typography>{noticia ? noticia?.content : <Skeleton variant="rounded" animation="wave" />}</Typography>
                </article>
            </section>
        </>
    );
}
