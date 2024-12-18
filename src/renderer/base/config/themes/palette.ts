import { alpha, createTheme } from '@mui/material/styles';

import { PresetColor, ThemeMode } from '@renderer/base/types/app';
import { PaletteThemeProps, PalettesProps } from '@renderer/base/types/theme';

import ThemeOption from './theme';
import { presetDarkPalettes, presetPalettes } from './colors';

const textColor = {
  primary: '#001737', // = rgba(0, 23, 55, 1)
  secondary: '#8392A5', // = rgba(131, 146, 165, 1)
};

const otherColor = {
  softGrey: '#F5F6FA', // = rgba(245, 246, 250, 1)
  stroke: '#D9D9D9', // = rgba(217, 217, 217, 1)
};

const Palette = (mode: ThemeMode, presetColor: PresetColor) => {
  const colors: PalettesProps =
    mode === 'dark' ? presetDarkPalettes : presetPalettes;

  const paletteColor: PaletteThemeProps = ThemeOption(
    colors,
    presetColor,
    mode,
  );

  // console.log({ paletteColor });

  return createTheme({
    palette: {
      mode,
      ...paletteColor,
      text: {
        primary: textColor.primary,
        secondary: textColor.secondary,
      },
      action: {
        active: otherColor.softGrey,
      },
      divider: otherColor.stroke,
    },
  });
};

export default Palette;
