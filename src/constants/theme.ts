import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@mui/material/styles/createPalette';

import { Theme } from '@mui/material';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Palette {
    consoleMain: Palette['primary'];
    consoleHighlight: Palette['primary'];
  }
  interface PaletteOptions {
    consoleHighlight: PaletteOptions['primary'];
    consoleMain: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    body2SemiBold: React.CSSProperties;
    placeholder: React.CSSProperties;
    navBarItem: React.CSSProperties;
    navBarSection: React.CSSProperties;
    link: React.CSSProperties;
    hint: React.CSSProperties;

    'landing/h1': React.CSSProperties;
    'landing/h2': React.CSSProperties;
    'landing/body1': React.CSSProperties;
    'landing/body2': React.CSSProperties;
    'landing/caption1': React.CSSProperties;
    'landing/caption2': React.CSSProperties;
    'landing/subtitle': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body2SemiBold?: React.CSSProperties;
    placeholder?: React.CSSProperties;
    navBarItem?: React.CSSProperties;
    navBarSection?: React.CSSProperties;
    link?: React.CSSProperties;
    hint?: React.CSSProperties;
    'landing/h1'?: React.CSSProperties;
    'landing/h2'?: React.CSSProperties;
    'landing/body1'?: React.CSSProperties;
    'landing/body2'?: React.CSSProperties;
    'landing/caption1'?: React.CSSProperties;
    'landing/caption2'?: React.CSSProperties;
    'landing/subtitle'?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body2SemiBold: true;
    placeholder: true;
    navBarItem: true;
    navBarSection: true;
    link: true;
    hint: true;
    'landing/h1': true;
    'landing/h2': true;
    'landing/body1': true;
    'landing/body2': true;
    'landing/caption1': true;
    'landing/caption2': true;
    'landing/subtitle': true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    consoleMain: true;
    consoleHighlight: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    error: string;
  }
}

let theme = createTheme({
  typography: {
    allVariants: {
      color: '#222A32',
    },
    fontFamily: ['Montserrat', 'Open Sans'].join(','),
    h1: {
      fontFamily: '"Montserrat", Open Sans',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '36px',
    },
    h2: {
      fontFamily: '"Montserrat", Open Sans',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '28px',
    },
    h3: {
      fontFamily: '"Montserrat", Open Sans',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '24px',
    },
    h5: {
      fontFamily: '"Montserrat", Open Sans',
    },
    body1: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '28px',
    },
    body2: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '150%',
    },
    body2SemiBold: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '150%',
    },
    caption: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '22px',
    },
    placeholder: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
    },
    button: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
    },
    navBarSection: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '115%',
    },
    navBarItem: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '115%',
    },
    link: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '24px',
      textDecorationLine: 'underline',
    },
    hint: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '24px',
    },
    'landing/h1': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '48px',
      fontWeight: 900,
      lineHeight: '59px',
    },
    'landing/h2': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '32px',
      fontWeight: 800,
      lineHeight: '39px',
    },
    'landing/body1': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    'landing/body2': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '18px',
    },
    'landing/caption1': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '22px',
    },
    'landing/caption2': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '22px',
    },
    'landing/subtitle': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          'landing/h1': 'h1',
          'landing/h2': 'h2',
          'landing/body1': 'p',
          'landing/body2': 'p',
          'landing/caption1': 'p',
          'landing/caption2': 'p',
          'landing/subtitle': 'p',
          navBarSection: 'p',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3C83D7',
      light: '#3C83D7',
      contrastText: '#F9FAFB',
    },
    secondary: {
      main: '#1873DD',
      light: '#E1E9F2',
      contrastText: '#919EAB',
    },
    error: {
      main: '#ED2222',
    },
    consoleMain: { main: '#161C24', contrastText: '#F9FAFB' },
    consoleHighlight: { main: '#D3F36B', contrastText: '#F9FAFB' },
    background: {
      default: '#F9FAFB',
    },
    text: {
      primary: '#222A32',
      secondary: '#5B6168',
    },
    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
