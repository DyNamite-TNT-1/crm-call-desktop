import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material/styles';
import ComponentOverrides from './overrides';
import useAppConfig from '@renderer/base/hook/common/useAppConfig';
import { useMemo } from 'react';
import Palette from './palette';

export default function ThemeCustomization({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode, presetColor } = useAppConfig();

  const theme: Theme = useMemo<Theme>(
    () => Palette(mode, presetColor),
    [mode, presetColor],
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
    }),
    [theme],
  );

  const themes: Theme = createTheme(themeOptions);

  themes.components = ComponentOverrides(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>;
    </StyledEngineProvider>
  );
}
