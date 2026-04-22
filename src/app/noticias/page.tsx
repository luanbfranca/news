'use client'
import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import Card from '@/components/card';
import { getFiltro, getNoticias } from '@/services/news.service';
import { useIsMobile } from '@/utils/useIsMobile';

export default function NoticiasPage() {

    const isMobile = useIsMobile(640);

    const [category, setCategory] = useState<string>();

    const [filters, setFilters] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            setFilters(await getFiltro());
        };
        fetchData();
    }, []);

    const [noticias, setNoticias] = useState<any[]>([]);
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
    }

    return <>
        <Typography variant="h5" fontWeight="bold" gutterBottom component="div">
            {
                category ? `Notícias: ${ category }` : 'Notícias'
            }
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: 'text.secondary', mb: 2 }}>
            {
                category ? `Mostrando notícias da categoria ${ category }` : 'Navegue por todas as nossas publicações ou filtre por categoria'
            }
        </Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
            {
                filters.map((filter, i) => {
                    return <Grid key={i}>
                        <Button variant={ filter === category ? 'contained' : 'outlined' }
                            size="small" color={ 'secondary' } sx={{borderRadius: '24px', textTransform: 'none'}}
                            disableElevation onClick={() => handleFilter(filter)}>{ filter }
                        </Button>
                    </Grid>
                })
            }
            
        </Grid>
        <Grid container spacing={3} sx={{justifyContent: "stretch",}}>
            {
                noticias.filter(noticia => {
                    return !category || noticia.category === category;
                }).map((noticia, i) => {
                    return <Grid size={isMobile ? 12 : 4} key={i}><Card {...noticia}/></Grid>
                })
            }
        </Grid>
    </>;
}