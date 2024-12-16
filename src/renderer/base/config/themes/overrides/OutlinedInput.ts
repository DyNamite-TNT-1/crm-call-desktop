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
    '&:hover .MuiOutlinedInput-notchedOutline': {
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
        notchedOutline: {
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[200]
              : theme.palette.grey[300],
        },
        root: {
          ...getColor({ variant: 'primary', theme }),
          '&.Mui-error': {
            ...getColor({ variant: 'error', theme }),
          },
        },
        inputSizeSmall: {
          padding: '7.5px 8px 7.5px 12px',
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
