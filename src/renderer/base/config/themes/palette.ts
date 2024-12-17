import { alpha, createTheme } from '@mui/material/styles';

import { PresetColor, ThemeMode } from '@renderer/base/types/app';
import { PaletteThemeProps, PalettesProps } from '@renderer/base/types/theme';

import ThemeOption from './theme';
import { presetDarkPalettes, presetPalettes } from './colors';

const defGreyPrimaryLight = [
  '#ffffff', // 0
  '#fafafa', // 50
  '#f5f5f5', // 100
  '#f0f0f0', // 200
  '#d9d9d9', // 300
  '#bfbfbf', // 400
  '#8c8c8c', // 500
  '#595959', // 600
  '#262626', // 700
  '#141414', // 800
  '#000000', // 900
];

const defGreyAscentLight = [
  '#454447', // A100
  alpha('#454447', 0.7), // A200
  '#eaeaea', // A400 == alpha('#5E5D60', 0.13) == rgba(94, 93, 96, 0.13)
  '#d9d9d9', // A700
];
const defGreyConstantLight = [
  '#fafafb', // A50
  '#e6ebf1', // A800
];
const defGreyLight = [
  ...defGreyPrimaryLight,
  ...defGreyAscentLight,
  ...defGreyConstantLight,
];

const hoverGreyLight = alpha('#1D1C1D', 0.06);

const defGreyPrimaryDark = [
  '#000000',
  '#141414',
  '#1e1e1e',
  '#595959',
  '#8c8c8c',
  '#bfbfbf',
  '#d9d9d9',
  '#f0f0f0',
  '#f5f5f5',
  '#fafafa',
  '#ffffff',
];

const defGreyAscentDark = [
  '#F8F8F8',
  alpha('#F8F8F8', 0.7),
  alpha('#F8F8F8', 0.13),
  alpha('#E8E8E8', 0.13),
];
const defGreyConstantDark = ['#121212', '#d3d8db'];
const defGreyDark = [
  ...defGreyPrimaryDark,
  ...defGreyAscentDark,
  ...defGreyConstantDark,
];

const hoverGreyDark = alpha('#F8F8F8', 0.13);

const Palette = (mode: ThemeMode, presetColor: PresetColor) => {
  const colors: PalettesProps =
    mode === 'dark' ? presetDarkPalettes : presetPalettes;

  colors.grey = mode === 'dark' ? defGreyDark : defGreyLight;

  const paletteColor: PaletteThemeProps = ThemeOption(
    colors,
    presetColor,
    mode,
  );
  // console.log({ paletteColor });

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey['A100'],
        secondary: alpha(paletteColor.grey['A100']!, 0.7),
        disabled:
          mode === 'dark'
            ? alpha(paletteColor.grey[900]!, 0.1)
            : paletteColor.grey[400],
      },
      action: {
        disabled: paletteColor.grey[300],
        hover: mode === 'dark' ? hoverGreyDark : hoverGreyLight,
      },
      divider: paletteColor.grey['A400'],
      background: {
        paper: mode === 'dark' ? paletteColor.grey[100] : paletteColor.grey[0],
        default: paletteColor.grey.A50,
      },
    },
  });
};

export default Palette;
