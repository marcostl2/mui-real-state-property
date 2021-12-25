import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#1DAEFF',
    },
    grey: {
      500: '#8F90A6',
      600: '#585981',
      700: '#110229',
    },
  },
});
