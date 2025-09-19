//@ts-nocheck
import { createTheme } from '@mui/material';

import PoppinsRegular from '/fonts/Poppins-Regular.ttf';
import PoppinsMedium from '/fonts/Poppins-Medium.ttf';
import PoppinsSemiBold from '/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '/fonts/Poppins-Bold.ttf';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true;
    blue: true;

    icon: true;
    main: true;
    link: true;
    default: true;
  }
}
export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F5F7F9',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          min-width: 390px;
          height: 100%;
          font-family: Poppins, sans-serif;
          font-size: 14px;
          color: var(--text);
          background-color: var(--bg-secondary);
        }
        
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), url(${PoppinsRegular}) format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Poppins'), url(${PoppinsMedium}) format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Poppins'), url(${PoppinsSemiBold}) format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Poppins'), url(${PoppinsBold}) format('truetype');
        }
      `,
    },
  },
});
