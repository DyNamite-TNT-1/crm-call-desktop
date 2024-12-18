import { PaletteColorOptions } from '@mui/material/styles';

import { PaletteThemeProps, PalettesProps } from '@renderer/base/types/theme';
import { ThemeMode } from '@renderer/base/types/app';

//PalettesProps in theme.ts
const Default = (colors: PalettesProps, mode: ThemeMode): PaletteThemeProps => {
  const { red, gold, green, blue, cyan, grey } = colors;
  // console.log({ colors });

  const contrastText = '#fff';

  const primaryColors: PaletteColorOptions = {
    50: '#BACCFF', // Temporarily set this value because it is unknown
    100: '#BACCFF', // = rgba(186, 204, 255, 1)
    200: '#8CA7FF', // = rgba(140, 167, 255, 1)
    300: '#6184FF', // = rgba(97, 132, 255, 1)
    400: '#0066FF', // = rgba(0, 102, 255, 1)
    500: '#004BF2', // = rgba(0, 75, 242, 1)
    600: '#0042E8', // = rgba(0, 66, 232, 1)
    700: '#0037D9', // = rgba(0, 55, 217, 1)
    800: '#002CCC', // = rgba(0, 44, 204, 1)
  };

  return {
    primary: {
      50: primaryColors[50],
      100: primaryColors[100],
      200: primaryColors[200],
      300: primaryColors[300],
      400: primaryColors[400],
      500: primaryColors[500],
      600: primaryColors[600],
      700: primaryColors[700],
      800: primaryColors[800],
      light: primaryColors[300],
      main: primaryColors[300]!,
      dark: primaryColors[700],
      contrastText,
    },
    secondary: {
      50: cyan[0],
      100: cyan[1],
      200: cyan[2],
      300: cyan[3],
      400: cyan[4],
      500: cyan[5],
      600: cyan[6],
      700: cyan[7],
      800: cyan[8],
      light: cyan[3],
      main: cyan[5]!,
      dark: cyan[7],
      contrastText,
    },
    error: {
      light: red[2],
      main: red[4],
      dark: red[7],
      contrastText,
    },
    warning: {
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      contrastText,
    },
    info: {
      light: blue[3],
      main: blue[5],
      dark: blue[7],
      contrastText,
    },
    success: {
      light: green[3],
      main: green[5],
      dark: green[7],
      contrastText,
    },
  };
};

export default Default;
