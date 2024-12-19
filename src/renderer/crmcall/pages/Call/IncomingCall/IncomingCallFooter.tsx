import { Button, Typography, useTheme } from '@mui/material';
import { Schedule } from '@mui/icons-material';

type Props = {
  onClickHistory?: () => void;
};

const IncomingCallFooter = ({ onClickHistory }: Props) => {
  const theme = useTheme();

  return (
    <div className="h-flex-row h-center-between h-px-16 h-py-12">
      <div className="h-flex-row h-cgap-8">
        <Typography variant="h5Normal">Assigned</Typography>
        <Typography
          variant="h5Normal"
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          None
        </Typography>
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={onClickHistory}
        startIcon={
          <Schedule
            style={{
              fontSize: '18px',
            }}
          />
        }
      >
        History
      </Button>
    </div>
  );
};

export default IncomingCallFooter;
