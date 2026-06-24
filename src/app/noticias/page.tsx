'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Grid, Skeleton, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import Card from '@/components/card';
import { getFiltro, getNoticias } from '@/services/news.service';
import { Noticia } from '@/models/noticia';

export default function NoticiasPage() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('category');
    const [category, setCategory] = useState<string>();

    useEffect(() => {
        if (searchQuery) {
            setCategory(searchQuery);
        }
    }, [searchQuery]);

    const [filters, setFilters] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            setFilters(await getFiltro());
        };
        fetchData();
    }, []);

    const [noticias, setNoticias] = useState<Noticia[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            setNoticias(await getNoticias());
        };
        fetchData();
    }, []);

    const handleFilter = (categoria: string) => {
        if (category === categoria) {
            setCategory('');
        } else {
            setCategory(categoria);
        }
    };

    return (
        <>
            <section>
                <Typography variant="h5" fontWeight="bold" gutterBottom component="h5" data-testid="titulo">
                    {category ? `Notícias: ${category}` : 'Notícias'}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="p" color="text.secondary" mb={2}>
                    {category ? `Mostrando notícias da categoria ${category}` : 'Navegue por todas as nossas publicações ou filtre por categoria'}
                </Typography>
                <Grid container spacing={1} mb={3}>
                    {filters[0]
                        ? filters.map((filter, i) => {
                            return (
                                <Grid key={i}>
                                    <Button
                                        variant={filter === category ? 'contained' : 'outlined'}
                                        size="small"
                                        color={'secondary'}
                                        sx={{
                                            borderRadius: '24px',
                                            textTransform: 'none',
                                        }}
                                        disableElevation
                                        aria-label={filter}
                                        onClick={() => handleFilter(filter)}
                                        data-testid={`categoria-${filter}`}
                                    >
                                        {filter}
                                    </Button>
                                </Grid>
                            );
                        })
                        : Array.from({ length: 7 }, (_, i) => {
                            return (
                                <Skeleton variant="rounded" animation="wave" key={i}>
                                    <Button
                                        variant={'outlined'}
                                        size="small"
                                        color={'secondary'}
                                        sx={{
                                            borderRadius: '24px',
                                            textTransform: 'none',
                                        }}
                                        disableElevation
                                    >
                                        loading
                                    </Button>
                                </Skeleton>
                            );
                        })}
                </Grid>
                <Grid container spacing={3} justifyContent={'stretch'} data-testid="noticias">
                    {noticias[0]
                        ? noticias
                            .filter((noticia) => {
                                return !category || noticia.category === category;
                            })
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
            </section>
        </>
    );
}
