import { Typography, TextField, Stack, InputAdornment, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

export default function ContatoPage() {
    return <>
        <Typography variant="h5" fontWeight="bold" gutterBottom component="div">
            Contato
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: 'text.secondary', mb: 2 }}>
            Envie sua mensagem, sugestão ou dúvida. Responderemos o mais breve possível.
        </Typography>
        <Stack spacing={2} sx={{maxWidth: 500}}>
            <TextField
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
                sx={{ '& .MuiOutlinedInput-root': {'alignItems': 'flex-start'}}}
            />
            <div>
                <Button variant="contained" color="secondary" sx={{ textTransform: 'none' }}>Enviar mensagem</Button>
            </div>
        </Stack>
    </>
}