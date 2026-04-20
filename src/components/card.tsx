import { Noticia } from '@/models/noticias';
import { Stack, Typography } from '@mui/material';
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
} : Noticia, fullMode = true, contrast = true) {
    const content = <CardContent className={ contrast ? 'card-contrast' : '' } sx={{ width: "100%" }}>
        <Typography gutterBottom component="div"
            className={ contrast ? 'highlight-contrast' : 'highlight' }
            sx={{ fontWeight: 'bold', textTransform: fullMode ? 'uppercase' : 'none' }}>
            { category }
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: contrast ? 'primary.contrastText' : null }}>
            { title }
        </Typography>
        { fullMode ? null : <Typography gutterBottom variant="body2" component="div" sx={{ color: 'text.secondary' }}>
            { date }
        </Typography> }
        <Typography variant="body1" sx={{ color: contrast ? 'primary.contrastText' : 'text.secondary' }}>
            { excerpt }
        </Typography>
    </CardContent>
    return (
        <CardMUI>
            <CardMedia
                sx={{ height: fullMode ? 420 : 200 }}
                image={ imageUrl }
                title={ imageAlt }
            >
                <Stack direction="row" spacing={1} sx={{ alignItems: "flex-end", height: "100%" }}>
                    { fullMode ? content : null }
                </Stack>
            </CardMedia>
            { fullMode ? null : content }
        </CardMUI>
    );
}
