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
      default: '#f0f4f8', // light grayish blue
      paper: '#FFFFFF', // white
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