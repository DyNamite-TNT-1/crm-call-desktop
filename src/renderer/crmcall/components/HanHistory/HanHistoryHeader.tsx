import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { historyHeaderHeight } from './HanHistory';

const HanHistoryHeader = (props: { colSize: string[] }) => {
  const { colSize } = props;
  const theme = useTheme();

  return (
    <div
      className="h-flex-row h-flex-wrap h-px-16 h-items-center"
      style={{
        height: historyHeaderHeight,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <div
        style={{
          maxWidth: colSize[0],
          flexBasis: colSize[0],
          flexGrow: 0,
        }}
      >
        <Typography
          variant={'h5Normal'}
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          Name
        </Typography>
      </div>
      <div
        style={{
          maxWidth: colSize[1],
          flexBasis: colSize[1],
          flexGrow: 0,
        }}
      >
        <Typography
          variant={'h5Normal'}
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          Activity
        </Typography>
      </div>
      <div
        style={{
          maxWidth: colSize[2],
          flexBasis: colSize[2],
          flexGrow: 0,
        }}
      >
        <Typography
          variant={'h5Normal'}
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          Staff
        </Typography>
      </div>
      <div
        style={{
          maxWidth: colSize[3],
          flexBasis: colSize[3],
          flexGrow: 0,
        }}
      >
        <Typography
          variant={'h5Normal'}
          sx={{
            color: theme.palette.text.secondary,
          }}
        >
          Subject
        </Typography>
      </div>
    </div>
  );
};

export default HanHistoryHeader;
