import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B81', // Vibrant coral
      contrastText: '#FFF',
    },
    secondary: {
      main: '#FF8C00', // Dark orange
    },
    success: {
      main: '#2ED573', // Emerald green
    },
    background: {
      default: '#FFF9F0', // Soft peach
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontWeight: 'bold',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
