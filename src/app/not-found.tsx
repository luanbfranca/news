import { Box, Typography } from '@mui/material';

export default function NotFound() {
    return (
        <>
            <Box display={'grid'} alignItems={'center'} alignContent={'center'} justifyContent={'center'} height={'50vh'} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} fontWeight="bold" gutterBottom component="h3" mb={8}>
                    404 - Página não encontrada
                </Typography>
                <Typography variant="h4" textAlign={'center'} fontWeight="bold" gutterBottom component="h4">
                    (╯°□°）╯︵ ┻━┻
                </Typography>
            </Box>
        </>
    );
}
