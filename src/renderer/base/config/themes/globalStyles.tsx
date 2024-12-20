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
        '*::-webkit-scrollbar': {
          width: '0.2em',
          height: '0.4em',
        },
        '*::-webkit-scrollbar-track': {
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,.1)',
        },
      }}
    />
  );
};
