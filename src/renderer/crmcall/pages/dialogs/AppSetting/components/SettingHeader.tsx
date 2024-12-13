import { Typography } from '@mui/material';

const SettingHeader = (props: { title: string }) => {
  const { title } = props;

  return (
    <Typography
      fontSize={'18px'}
      lineHeight={'24px'}
      fontWeight={600}
      sx={{
        padding: '8px 0px 16px',
      }}
    >
      {title}
    </Typography>
  );
};

export default SettingHeader;
