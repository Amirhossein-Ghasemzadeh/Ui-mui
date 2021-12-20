import { createTheme } from '@mui/material';
import GilroyBold from './components/assets/fonts/Gilroy-Bold.woff';
import GilroyHeavy from './components/assets/fonts/Gilroy-Heavy.ttf';
import GilroyRegular from './components/assets/fonts/Gilroy-Regular.ttf';

const gilroyRegular = {
  fontFamily: 'Gilroy-Regular',
  fontWeight: 'normal',
  src: `local('Gilroy-Regular'),
   url(${GilroyRegular}) format('truetype')`,
};
const gilroyBold = {
  fontFamily: 'Gilroy-Bold',
  fontWeight: 'normal',
  src: `local('Gilroy-Bold'),
  url(${GilroyBold}) format('woff')`,
};
const gilroyHeavy = {
  fontFamily: 'Gilroy-Heavy',
  fontWeight: 'normal',
  src: `local('Gilroy-Heavy'),
   url(${GilroyHeavy}) format('truetype')`,
};

const theme = createTheme({
  typography: {
    fontFamily: ['Gilroy-Bold', 'Gilroy-Regular', 'Gilroy-Heavy'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [gilroyBold, gilroyHeavy, gilroyRegular],
        
      },
    },
  },
});

export default theme;
