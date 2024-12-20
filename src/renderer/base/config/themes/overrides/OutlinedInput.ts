import { Theme } from '@mui/material/styles';
import { ColorProps } from '@renderer/base/types/extended';
import { getColors } from '@renderer/base/utils/getColors';

type Props = {
  variant: ColorProps;
  theme: Theme;
};

// ==============================|| OVERRIDES - INPUT BORDER ||============================== //

function getColor({ variant, theme }: Props) {
  const colors = getColors(theme, variant);
  const { light } = colors;

  return {
    '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
      borderColor: light,
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${light}`,
      },
    },
  };
}

// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '10.5px 14px 10.5px 12px',
        },
        notchedOutline: {},
        root: {
          backgroundColor: theme.palette.background.paper,
          borderRadius: '10px',
          '& .MuiInputAdornment-positionStart': {
            marginRight: 0,
          },
          ...getColor({ variant: 'primary', theme }),
          '&.Mui-error': {
            ...getColor({ variant: 'error', theme }),
          },
        },
        inputSizeSmall: {
          padding: '8.5px 12px',
        },
        inputMultiline: {
          padding: 0,
        },
        colorSecondary: getColor({ variant: 'secondary', theme }),
        colorError: getColor({ variant: 'error', theme }),
        colorWarning: getColor({ variant: 'warning', theme }),
        colorInfo: getColor({ variant: 'info', theme }),
        colorSuccess: getColor({ variant: 'success', theme }),
      },
    },
  };
}
