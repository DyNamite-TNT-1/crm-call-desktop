import { Theme, GlobalStyles } from '@mui/material';

export const setGlobalStyles = (theme: Theme) => {
  const root = {
    ':root': {
      '--han-border-color': theme.palette.divider,
    },
  };

  return (
    <GlobalStyles
      styles={{
        ...root,
      }}
    />
  );
};
