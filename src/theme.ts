import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    background: {
      default: '#f5f5f5', // light gray background
    },
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#dc004e', // pinkish red
    },
  },
});

export default theme;
