import { useTheme, Typography } from '@mui/material';
import React from 'react';

const SecondaryHeader = (props: { title: string }) => {
  const { title } = props;
  const theme = useTheme();
  return (
    <Typography
      sx={{
        color: theme.palette.text.secondary,
        lineHeight: '22px',
        fontSize: theme.typography.fontSize,
      }}
    >
      {title}
    </Typography>
  );
};

export default SecondaryHeader;
