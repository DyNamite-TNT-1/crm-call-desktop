import { PresetColor, ThemeMode } from '@renderer/base/types/app';
import { PalettesProps, PaletteThemeProps } from '@renderer/base/types/theme';
import Default from './default';

const Theme = (
  colors: PalettesProps,
  presetColor: PresetColor,
  mode: ThemeMode,
): PaletteThemeProps => {
  switch (presetColor) {
    default:
      return Default(colors, mode);
  }
};

export default Theme;
