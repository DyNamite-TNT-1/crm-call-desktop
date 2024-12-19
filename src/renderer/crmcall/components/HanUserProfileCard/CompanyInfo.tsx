import { Typography, useTheme } from '@mui/material';

type Props = {
  company: string;
};

const CompanyInfo = ({ company }: Props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h5Normal"
      sx={{
        paddingLeft: '20px',
        color: theme.palette.text.secondary,
        position: 'relative',
        '&::before': {
          content: "''",
          position: 'absolute',
          top: '50%',
          left: 10,
          width: 4,
          height: 4,
          background: theme.palette.text.secondary,
          borderRadius: '50%',
        },
      }}
    >
      {company}
    </Typography>
  );
};

export default CompanyInfo;
