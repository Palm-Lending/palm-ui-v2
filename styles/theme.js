import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiDialog: {
      paper: {
        backgroundColor: '#000000',
      },
    },
  },
});

export default theme;