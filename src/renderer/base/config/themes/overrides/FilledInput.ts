import { Theme } from '@mui/material/styles';
// ==============================|| OVERRIDES - FILLED INPUT ||============================== //

export default function FilledInput(theme: Theme) {
  return {
    MuiFilledInput: {
      styleOverrides: {
        input: {
          padding: '10.5px 14px 10.5px 12px',
        },
        root: {
          height: '40px',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '10px',
          '&::before, &::after': {
            borderBottom: '0px',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '0px',
          },
          '&.Mui-focused:after': {
            border: 'none',
          },
          '& .MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)':
            {
              marginTop: '0px',
              marginRight: '0px',
            },
        },
        inputSizeSmall: {
          padding: '8.5px 12px',
        },
      },
    },
  };
}
