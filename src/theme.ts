import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    mode: 'light', 
    background: {
      default: '#f0f4f8',
      paper: '#FFFFFF', 
    },
    primary: {
      main: '#297ac1', 
    },
    secondary: {
      main: '#dc004e', 
    },
    error: {
      main: '#b8173f', 
    },
    success: {
      main: '#17B890', 
    },
  },
});

export default theme;