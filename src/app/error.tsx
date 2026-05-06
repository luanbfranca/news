'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Error({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <>
            <Box display={'grid'} alignItems={'center'} alignContent={'center'} justifyContent={'center'} height={'50vh'} width={'100%'}>
                <Typography variant="h3" textAlign={'center'} fontWeight="bold" gutterBottom component="h3" mb={8}>
                    Algum erro inesperado aconteceu
                </Typography>
                <Typography variant="h4" textAlign={'center'} fontWeight="bold" gutterBottom component="h4">
                    ಥ_ಥ
                </Typography>
            </Box>
        </>
    );
}
