'use client';

import { Link, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import NextLink from '@/components/link';
import { Noticia } from '@/models/noticia';
import { getNoticia } from '@/services/news.service';

const breadcrumbNameMap: { [key: string]: string } = {
    '/noticias': 'Notícias',
    '/faq': 'FAQ',
    '/contato': 'Contato',
};

export default function Breadcrumbs() {
    const location = usePathname();
    const pathnames = location.split('/').filter((x) => x);
    const home = pathnames[0] === 'home';

    const params = useParams<{ titulo: string }>();
    const [noticia, setNoticia] = useState<Noticia>();

    useEffect(() => {
        if (params) {
            const fetchData = async () => {
                setNoticia(await getNoticia(params.titulo));
            };
            fetchData();
        }
    }, [params]);

    return (
        <MUIBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }} separator={<NavigateNextIcon fontSize="small" />}>
            {home ? (
                <Typography sx={{ color: 'text.primary', fontWeight: 'bold' }}>Home</Typography>
            ) : (
                <Link component={NextLink} underline="hover" color="inherit" href="/">
                    Home
                </Link>
            )}
            {pathnames.map((_, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return last ? (
                    home ? null : (
                        <Typography key={to} sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                            {params.titulo ? noticia?.title : breadcrumbNameMap[to]}
                        </Typography>
                    )
                ) : (
                    <Link component={NextLink} underline="hover" color="inherit" href={to} key={to}>
                        {breadcrumbNameMap[to]}
                    </Link>
                );
            })}
        </MUIBreadcrumbs>
    );
}
