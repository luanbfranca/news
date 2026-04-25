'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#0a0a0a',
        },
        secondary: {
            main: '#c41e3a',
            light: '#e75b6d',
        },
    },
    typography: {
        fontSize: 14,
        // fontWeightRegular: 500
    }
});

export default function ThemeWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={defaultTheme}>
            { children }
        </ThemeProvider>
    )
}