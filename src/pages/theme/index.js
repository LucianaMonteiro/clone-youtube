import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
// import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
 palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white,
      dark: '#f4f6f8',
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3fa6ff',
    },
    text:{
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;