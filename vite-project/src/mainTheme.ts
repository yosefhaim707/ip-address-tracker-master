// theme.ts
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

// ראשית, נגדיר את הטיפוסים המותאמים שלנו בצורה מקיפה יותר
declare module '@mui/material/styles' {
  interface CustomPalette {
    cardBorder: string;
    cardShadow: string;
    highlightBackground: string;
  }

  interface Palette {
    custom: CustomPalette;
  }

  interface PaletteOptions {
    custom?: CustomPalette;
  }

  interface TypographyVariants {
    pageTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    pageTitle?: React.CSSProperties;
  }
}

// הרחבת הטיפוסים של הקומפוננטות
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
  }
}

// הגדרת ערכים קבועים לשימוש בשתי התמות
const SPACING_UNIT = 8;

const FONT_FAMILIES = {
  primary: '"Roboto", "Helvetica", "Arial", sans-serif',
  secondary: '"Open Sans", "Helvetica", "Arial", sans-serif',
};

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// הגדרת אפשרויות משותפות
const commonThemeOptions: ThemeOptions = {
  spacing: SPACING_UNIT,
  typography: {
    fontFamily: FONT_FAMILIES.primary,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: '0.5em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    // וריאנט מותאם אישית חדש
    pageTitle: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
  },
};

// הגדרת תמת האור
const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    custom: {
      cardBorder: '#e0e0e0',
      cardShadow: '0 2px 4px rgba(0,0,0,0.1)',
      highlightBackground: '#f0f7ff',
    },
  },
});

// הגדרת תמת החושך
const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#b3e5fc',
      dark: '#42a5f5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f48fb1',
      light: '#f6a5c0',
      dark: '#bf5f82',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    custom: {
      cardBorder: '#333333',
      cardShadow: '0 2px 4px rgba(0,0,0,0.3)',
      highlightBackground: '#1a2327',
    },
  },
});

// הוספת פונקציה עזר לבדיקת מצב התמה
export const isThemeDark = (theme: Theme) => theme.palette.mode === 'dark';

export { lightTheme, darkTheme };
