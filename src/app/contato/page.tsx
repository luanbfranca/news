'use client';

import { Typography, TextField, Stack, InputAdornment, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

export default function ContatoPage() {
    const onSubmit = (event: FormData) => {
        const form = Object.fromEntries(event);
        alert(JSON.stringify(form));
    };
    return (
        <>
            <section>
                <Typography variant="h5" fontWeight="bold" gutterBottom component="h5" data-testid="titulo">
                    Contato
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="p" color="text.secondary" mb={2}>
                    Envie sua mensagem, sugestão ou dúvida. Responderemos o mais breve possível.
                </Typography>
                <form action={onSubmit}>
                    <Stack spacing={2} maxWidth={500}>
                        <TextField
                            name="nome"
                            label="Nome"
                            required
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField
                            name="email"
                            label="E-mail"
                            required
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                        <TextField
                            name="mensagem"
                            label="Mensagem"
                            required
                            multiline
                            rows={4}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MessageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{ '& .MuiOutlinedInput-root': { alignItems: 'flex-start' } }}
                        />
                        <div>
                            <Button variant="contained" type="submit" color="secondary" sx={{ textTransform: 'none' }} data-testid="submit">
                                Enviar mensagem
                            </Button>
                        </div>
                    </Stack>
                </form>
            </section>
        </>
    );
}
