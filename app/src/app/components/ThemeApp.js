"use client";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    background: {
      default: '#FFFFFF', // White
      paper: '#171E28', // Very Dark Blue
      card: '#29303E',  // Dark Blue
      button: '#FC7614' // Orange
    },
    text: {
      title: '#FFFFFF', // White
      primary: '#959EAC', // Light Grey
      secondary: '#FC7614', // Orange
      button: '#29303E' 
    },
  },
});

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}