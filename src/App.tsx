import React from 'react';
import Dashboard from './pages/Dashboard';
import { Box, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: { md: '100px' },
          }}
        >
          <Typography variant="h1" gutterBottom id="top">
            Fraud Analytics Dashboard
          </Typography>
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
