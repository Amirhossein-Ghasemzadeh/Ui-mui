import { createTheme } from '@mui/material';
import GilroyRegular from './components/assets/fonts/Gilroy-Regular.ttf';
import GilroyBold from './components/assets/fonts/Gilroy-Bold.woff';
import GilroyHeavy from './components/assets/fonts/Gilroy-Heavy.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'Gilroy',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Gilroy'), local('Gilroy-Regular'), url(${GilroyRegular}) format('ttf');
        }
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Gilroy'), local('Gilroy-Bold'), url(${GilroyBold}) format('woff');
        }
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('Gilroy'), local('Gilroy-Heavy'), url(${GilroyHeavy}) format('ttf');
        }
      `,
    },
  },
});

export default theme;
