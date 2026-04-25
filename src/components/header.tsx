'use client'

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

import { useState } from 'react';
import { usePathname } from "next/navigation";
import NextLink from '@/components/link';
import Destaque from './destaque';
import { useMediaQuery } from '@mui/material';

export default function Header() {

    const isMobile = useMediaQuery('(max-width:1080px)');
    const [openDrawer, setOpenDrawer] = useState(false);

    const pathName = usePathname();

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const navButtons = (
        <>
            <Button href="/home" component={NextLink} color="inherit" sx={pathName === "/home" ? {fontWeight: 'bold'} : null}>Home</Button>
            <Button href="/noticias" component={NextLink} color="inherit" sx={pathName === "/noticias" ? {fontWeight: 'bold'} : null}>Notícias</Button>
            <Button href="/faq" component={NextLink} color="inherit" sx={pathName === "/faq" ? {fontWeight: 'bold'} : null}>FAQ</Button>
            <Button href="/contato" component={NextLink} color="inherit" sx={pathName === "/contato" ? {fontWeight: 'bold'} : null}>Contato</Button>
            <Button href="" component={NextLink} color="inherit"><LiveTv/> Ao vivo</Button>
            <Button href="" component={NextLink} color="inherit">Política</Button>
            <Button href="" component={NextLink} color="inherit">Money</Button>
            <Button href="" component={NextLink} color="inherit">Mundo</Button>
            <Button href="" component={NextLink} color="inherit">Agro</Button>
            <Button href="" component={NextLink} color="inherit">Esportes</Button>
            <Button href="" component={NextLink} color="inherit" sx={{textAlign: 'center'}}>Viagem & <br />Gastronomia</Button>
        </>
    )

    return (
        <>
            <div className="sticky-header">
                <AppBar color="primary" position="relative">
                    <Toolbar className="preserve-space">
                        <Typography sx={{ flexGrow: 1, '& span': { color: 'secondary.main'} }}>
                            PORTAL <span>NOTÍCIAS</span>
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
                                        <Drawer open={openDrawer} onClose={handleDrawerClose} onClick={handleDrawerClose}>
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
                {
                    isMobile ? null : <Destaque/>
                }
            </div>
        </>
    );
}