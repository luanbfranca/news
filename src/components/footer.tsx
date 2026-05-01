'use client'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

import NextLink from '@/components/link';

export default function Footer() {
    const isMobile = useMediaQuery('(max-width:640px)');

    return (
        <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Container maxWidth={false} sx={{ maxWidth: '1080px' }}>
                    <Stack direction="row">
                        <Typography variant="body2" flexGrow={1}>
                            © 2026 Portal de Notícias. Todos os direitos reservados.
                        </Typography>
                        {isMobile ? null : (
                            <Stack direction="row" spacing={2} sx={{ '& .MuiButton-root': { textTransform: 'none' } }}>
                                <Link href="/home" component={NextLink} variant="body2" underline="hover" color="inherit">
                                    Home
                                </Link>
                                <Link href="/noticias" component={NextLink} variant="body2" underline="hover" color="inherit">
                                    Notícias
                                </Link>
                                <Link href="/faq" component={NextLink} variant="body2" underline="hover" color="inherit">
                                    FAQ
                                </Link>
                                <Link href="/contato" component={NextLink} variant="body2" underline="hover" color="inherit">
                                    Contato
                                </Link>
                            </Stack>
                        )}
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
