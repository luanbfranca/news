'use client'

import { getNoticias } from '@/services/news.service';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [noticias, setNoticias] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setNoticias(await getNoticias());
        };
        fetchData();
    }, [])

    return <div>{noticias[0] ? noticias[0]['title'] : null}</div>;
}