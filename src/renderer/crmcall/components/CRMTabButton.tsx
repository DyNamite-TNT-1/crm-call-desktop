import { Typography, ListItemButton, alpha, useTheme } from '@mui/material';

export const CRMTabButton = (props: {
  title: string;
  disabled?: boolean;
  selected?: boolean;
  onClick: (event: any) => void;
}) => {
  const theme = useTheme();
  const { onClick, title, disabled, selected } = props;
  return (
    <ListItemButton
      sx={{
        borderRadius: '8px',
        height: '36px',
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.8),
          },
        },
      }}
      selected={selected}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography
        variant="body1"
        sx={{
          color: selected ? '#fff' : undefined,
          fontWeight: selected ? 600 : 400,
        }}
      >
        {title}
      </Typography>
    </ListItemButton>
  );
};
