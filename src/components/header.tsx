import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import PersonOutline from '@mui/icons-material/PersonOutline';
import LiveTv from '@mui/icons-material/LiveTv';
import Menu from '@mui/icons-material/Menu';

import { useIsMobile } from '@/utils/useIsMobile';
import { useState } from 'react';

export default function Header() {

    const isMobile = useIsMobile(1080);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const navButtons = (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Notícias</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit">Contato</Button>
            <Button color="inherit"><LiveTv/> Ao vivo</Button>
            <Button color="inherit">Política</Button>
            <Button color="inherit">Money</Button>
            <Button color="inherit">Mundo</Button>
            <Button color="inherit">Agro</Button>
            <Button color="inherit">Esportes</Button>
            <Button color="inherit">Viagem & <br />Gastronomia</Button>
        </>
    )

    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar className="preserve-space">
                    <Typography sx={{ flexGrow: 1 }}>
                        PORTAL <span className="highlight">NOTÍCIAS</span>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{'& .MuiButton-root': { textTransform: 'none'}}}>
                        {
                            isMobile ? null : (
                                navButtons
                            )
                        }
                        <IconButton size="large" color="inherit">
                            <Search />
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <PersonOutline />
                        </IconButton>
                        {
                            isMobile ? (
                                <>
                                    <IconButton size="large" color="inherit" onClick={handleDrawerOpen}>
                                        <Menu />
                                    </IconButton>
                                    <Drawer open={openDrawer} onClose={handleDrawerClose}>
                                        <Stack spacing={2} className="preserve-space" sx={{ width: 250 }}>
                                            <br />
                                            { navButtons }
                                        </Stack>
                                    </Drawer>
                                </>
                            ) : null
                        }
                    </Stack>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}