import { Typography } from '@mui/material';
import SettingHeader from '../../components/SettingHeader';

const Information = () => {
  return (
    <div
      className="h-flex-col h-fill-w"
      style={{
        padding: '12px 16px',
      }}
    >
      <SettingHeader title="Release Version" />
      <Typography
        variant="subtitle2"
        style={{ marginRight: 16, whiteSpace: 'pre-line' }}
      >
        {`CRMCall v0.0.1 build on 13 Dec 2024
        Release note:
        - Add new setting.`}
      </Typography>
    </div>
  );
};

export default Information;
