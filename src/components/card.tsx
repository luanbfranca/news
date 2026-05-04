import { Noticia } from '@/models/noticia';
import { Skeleton, Stack, Typography } from '@mui/material';
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Card({
    imageUrl = '',
    imageAlt = '',
    title = '',
    category = '',
    date = '',
    excerpt = '',
    fullMode = false,
    contrast = false,
    small = false,
}: Noticia & { fullMode?: boolean; contrast?: boolean; small?: boolean }) {
    const content = title ? (
        <CardContent className={contrast ? 'card-contrast' : ''} sx={{ width: '100%' }}>
            <Typography gutterBottom component="div" fontWeight={'bold'} textTransform={fullMode ? 'uppercase' : 'none'} color={contrast ? 'secondary.light' : 'secondary.main'}>
                {category}
            </Typography>
            <Typography
                gutterBottom
                variant="h6"
                component="h6"
                fontSize={small ? 'small' : 'regular'}
                fontWeight={'bold'}
                color={contrast ? 'primary.contrastText' : 'primary.main'}
            >
                {title}
            </Typography>
            {fullMode ? null : (
                <Typography gutterBottom variant="body2" component="p" color="text.secondary">
                    {date}
                </Typography>
            )}
            <Typography variant="body1" color={contrast ? 'primary.contrastText' : 'text.secondary'}>
                {excerpt}
            </Typography>
        </CardContent>
    ) : null;
    return content ? (
        <CardMUI sx={{ borderRadius: '8px', height: '100%' }}>
            <CardMedia sx={{ height: small ? 250 : fullMode ? 420 : 200 }} image={imageUrl} title={imageAlt}>
                <Stack direction="row" spacing={1} alignItems={'flex-end'} height={'100%'}>
                    {fullMode ? content : null}
                </Stack>
            </CardMedia>
            {fullMode ? null : content}
        </CardMUI>
    ) : <Skeleton variant="rounded" animation="wave" width={'100%'} height={small ? 250 : fullMode ? 420 : 200} />;
}
