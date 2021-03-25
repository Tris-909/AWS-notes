import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4d4d4d',
      main: '#212121',
      dark: '#171717',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ea605d',
      main: '#e53935',
      dark: '#a02725',
      contrastText: '#fff',
    },
  },
});

export default theme;