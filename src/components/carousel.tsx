import { IconButton, Skeleton, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Noticia } from '@/models/noticia';
import Link from 'next/link';
import Card from './card';
import styles from './carousel.module.css';
import { useState } from 'react';

export default function Carousel({ noticias }: { noticias: Noticia[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
    };
    const prevCard = () => {
        setCurrentIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
    };

    return (
        <>
            <Stack direction={'row'} spacing={2} maxWidth={'100%'} overflow={'hidden'} padding={'2px'} className={styles['card-fade']}>
                {noticias[0]
                    ? noticias.map((noticia, i) => {
                          return (
                              <div
                                  style={{
                                      transform: `translateX(-${currentIndex * 316}px)`,
                                  }}
                                  key={i}
                                  className={styles['card-min-width']}
                              >
                                  <article>
                                      <Link href={`/noticias/${noticia.slug}`}>
                                          <Card {...noticia} />
                                      </Link>
                                  </article>
                              </div>
                          );
                      })
                    : Array.from({ length: 4 }, (_, i) => {
                          return <Skeleton variant="rounded" animation="wave" width={300} height={400} key={i} className={styles['card-min-width']} />;
                      })}
            </Stack>
            <Stack direction={'row'} justifyContent={'flex-end'} mt={1}>
                <IconButton aria-label="voltar" onClick={prevCard}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton aria-label="avançar" onClick={nextCard}>
                    <ChevronRightIcon />
                </IconButton>
            </Stack>
        </>
    );
}
