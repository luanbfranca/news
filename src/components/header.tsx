import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <div>
        <AppBar position="fixed" color="primary">
            <Toolbar className="preserve-space">
                <Typography sx={{ flexGrow: 1 }}>
                    PORTAL <span className="highlight">NOTÍCIAS</span>
                </Typography>
                <Box sx={{'& .MuiButton-root': { textTransform: 'none',}}}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Notícias</Button>
                    <Button color="inherit">FAQ</Button>
                    <Button color="inherit">Contato</Button>
                    <Button color="inherit">Ao vivo</Button>
                    <Button color="inherit">Política</Button>
                    <Button color="inherit">Money</Button>
                    <Button color="inherit">Mundo</Button>
                    <Button color="inherit">Agro</Button>
                    <Button color="inherit">Esportes</Button>
                    <Button color="inherit">Viagem & <br />Gastronomia</Button>
                    <IconButton size="large" color="inherit">
                        search
                    </IconButton>
                    <IconButton size="large" color="inherit">
                        person
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <Toolbar />
    </div>
  );
}