/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import Card from '@/components/card';
import Carousel from '@/components/carousel';
import { Noticia } from '@/models/noticia';
import { getNoticias } from '@/services/news.service';

import { Grid, Skeleton, Stack, Typography } from '@mui/material';

export default function HomePage() {
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
            <Link href={`/noticias/${noticias[0]?.slug}`}>
                <Card fullMode={true} contrast={true} {...noticias[0]} />
            </Link>

            <Grid container spacing={2} justifyContent={'stretch'} mb={4} mt={4}>
                <Grid size={{ xs: 12, sm: 7 }}>
                    <Link href={`/noticias/${noticias[1]?.slug}`}>
                        <Card {...noticias[1]} date="" />
                    </Link>
                </Grid>

                <Grid size={{ xs: 12, sm: 5 }}>
                    <Link href={`/noticias/${noticias[2]?.slug}`}>
                        <Card {...noticias[2]} date="" />
                    </Link>
                </Grid>
            </Grid>

            <Carousel noticias={noticias.filter((noticia) => noticia.category === 'Tecnologia')} />

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2}>
                Webstories
            </Typography>
            <Grid container spacing={2} justifyContent={'stretch'}>
                {webstories[0]
                    ? webstories.map((noticia, i) => {
                          return (
                              <Grid size={{ xs: 6, sm: 4, md: 2.3 }} key={i}>
                                  <Link href={`/noticias/${noticia?.slug}`}>
                                      <Card fullMode={true} contrast={true} small={true} {...noticia} />
                                  </Link>
                              </Grid>
                          );
                      })
                    : Array.from({ length: 3 }, (_, i) => {
                          return (
                              <Grid size={{ xs: 6, sm: 4, md: 2.3 }} key={i}>
                                  <Skeleton variant="rounded" animation="wave" width={'100%'} height={250} />
                              </Grid>
                          );
                      })}
            </Grid>

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2} mt={4}>
                Review
            </Typography>
            <Stack spacing={3} maxWidth={560}>
                <Link href={`/noticias/${review[0]?.slug}`}>
                    <Card {...review[0]} />
                </Link>
                <Link href={`/noticias/${review[1]?.slug}`}>
                    <Card {...review[1]} />
                </Link>
            </Stack>

            <Typography variant="h6" fontWeight="bold" gutterBottom component="h6" color="secondary.main" textTransform="uppercase" mb={2} mt={4}>
                Últimas notícias
            </Typography>
            <Grid container spacing={3} justifyContent={'stretch'}>
                {' '}
                {noticias[0]
                    ? noticias
                          .toSorted((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
                          .map((noticia, i) => {
                              return (
                                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                      <Link href={`/noticias/${noticia?.slug}`}>
                                          <Card {...noticia} />
                                      </Link>
                                  </Grid>
                              );
                          })
                    : Array.from({ length: 9 }, (_, i) => {
                          return (
                              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                  <Skeleton variant="rounded" animation="wave" width={'100%'} height={400} />
                              </Grid>
                          );
                      })}
            </Grid>
        </>
    );
}
