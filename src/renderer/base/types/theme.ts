import { SimplePaletteColorOptions } from '@mui/material';

// ==============================|| DEFAULT THEME - TYPES  ||============================== //

export interface PalettesProps {
  [key: string]: string[] & {
    primary?: string;
  };
}

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
};
