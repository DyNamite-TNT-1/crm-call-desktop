import {
  createTheme,
  Theme,
  ThemeProvider,
} from '@mui/material/styles';
import ComponentOverrides from './overrides';

export default function ThemeCustomization({
  children,
}: {
  children: React.ReactNode;
}) {
  const themes: Theme = createTheme();

  themes.components = ComponentOverrides(themes);

  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
}
