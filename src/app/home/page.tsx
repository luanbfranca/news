'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import Card from '@/components/card';
import Carousel from '@/components/carousel';
import { Noticia } from '@/models/noticia';
import { getNoticias } from '@/services/news.service';

import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

export default function HomePage() {
    const isMobile = useMediaQuery('(max-width:640px)');

    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [review, setReview] = useState<Noticia[]>([]);
    const [webstories, setWebstories] = useState<Noticia[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getNoticias();
            setNoticias(res);

            const [primeiroRev, segundoRev] = [res[Math.floor(Math.random() * res.length)], res[Math.floor(Math.random() * res.length)]];
            setReview([primeiroRev, segundoRev].map(({ date, ...rev }) => rev));

            const [primeiroWeb, segundoWeb, terceiroWeb] = [
                res[Math.floor(Math.random() * res.length)],
                res[Math.floor(Math.random() * res.length)],
                res[Math.floor(Math.random() * res.length)],
            ];
            setWebstories([primeiroWeb, segundoWeb, terceiroWeb].map(({ date, excerpt, category, ...rev }) => rev));
        };
        fetchData();
    }, []);

    return (
        <>
            {noticias[0] ? (
                <Link href={`/noticias/${noticias[0].slug}`}>
                    <Card fullMode={true} contrast={true} {...noticias[0]} />
                </Link>
            ) : null}
            <Grid container spacing={2} justifyContent={'stretch'} mb={4} mt={4}>
                {noticias[1] ? (
                    <Grid size={isMobile ? 12 : 7}>
                        <Link href={`/noticias/${noticias[1].slug}`}>
                            <Card {...noticias[1]} date="" />
                        </Link>
                    </Grid>
                ) : null}
                {noticias[2] ? (
                    <Grid size={isMobile ? 12 : 5}>
                        <Link href={`/noticias/${noticias[2].slug}`}>
                            <Card {...noticias[2]} date="" />
                        </Link>
                    </Grid>
                ) : null}
            </Grid>

            <Carousel noticias={noticias.filter((noticia) => noticia.category === 'Tecnologia')} />

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2}>
                Webstories
            </Typography>
            <Grid container spacing={2} justifyContent={'stretch'}>
                {webstories.map((noticia, i) => {
                    return (
                        <Grid size={isMobile ? 6 : 2.3} key={i}>
                            <Link href={`/noticias/${noticia.slug}`}>
                                <Card fullMode={true} contrast={true} small={true} {...noticia} />
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2} mt={4}>
                Review
            </Typography>
            <Stack spacing={3} maxWidth={560}>
                {review[0] ? (
                    <>
                        <Link href={`/noticias/${review[0].slug}`}>
                            <Card {...review[0]} />
                        </Link>
                        <Link href={`/noticias/${review[1].slug}`}>
                            <Card {...review[1]} />
                        </Link>
                    </>
                ) : null}
            </Stack>

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2} mt={4}>
                Últimas notícias
            </Typography>
            <Grid container spacing={3} justifyContent={'stretch'}>
                {noticias
                    .toSorted((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
                    .map((noticia, i) => {
                        return (
                            <Grid size={isMobile ? 12 : 4} key={i}>
                                <Link href={`/noticias/${noticia.slug}`}>
                                    <Card {...noticia} />
                                </Link>
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
}
