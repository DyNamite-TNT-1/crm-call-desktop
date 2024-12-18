import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  ThemeProvider,
  TypographyVariantsOptions,
} from '@mui/material/styles';
import ComponentOverrides from './overrides';
import useAppConfig from '@renderer/base/hook/common/useAppConfig';
import { useMemo } from 'react';
import Palette from './palette';
import Typography from './typography';
import { CssBaseline } from '@mui/material';

export default function ThemeCustomization({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode, presetColor, fontFamily } = useAppConfig();

  const theme: Theme = useMemo<Theme>(
    () => Palette(mode, presetColor),
    [mode, presetColor],
  );

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(
      () => Typography(mode, fontFamily, theme),
      [mode, fontFamily],
    );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024, // 0 <= phone, tablet(vertical) < 1024 <= desktop, tablet(horizontal)
          lg: 1266,
          xl: 1536,
        },
      },
      palette: theme.palette,
      typography: {
        ...themeTypography,
      },
    }),
    [theme, themeTypography],
  );

  const themes: Theme = createTheme(themeOptions);

  themes.components = ComponentOverrides(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
