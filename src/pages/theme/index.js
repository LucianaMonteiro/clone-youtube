import { colors, createTheme } from '@material-ui/core';

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
});

export default theme;
