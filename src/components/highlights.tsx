'use client'

import { AppBar, Button, Stack, Toolbar } from '@mui/material'
import NextLink from '@/components/link';
import { useEffect, useState } from 'react';
import { getDestaques } from '@/services/news.service';

export default function Highlights() {

    const [destaques, setDestaques] = useState<string[]>();
    useEffect(() => {
        const fetchData = async () => {
            setDestaques(await getDestaques());
        };
        fetchData();
    }, []);

    const navButtons = (
        <>
            {
                destaques?.map((destaque, i) => {
                    return <Button href="" component={NextLink} color="inherit" sx={{fontWeight: 800}} key={i}>{ destaque }</Button>
                })
            }
        </>
    )

    return <>
        <AppBar position="relative" sx={{ bgcolor: '#ffffff', color: 'text.secondary'}}>
            <Toolbar variant="dense">
                <Stack direction="row" spacing={1}>
                    { navButtons }
                </Stack>
            </Toolbar>
        </AppBar>
    </>
}