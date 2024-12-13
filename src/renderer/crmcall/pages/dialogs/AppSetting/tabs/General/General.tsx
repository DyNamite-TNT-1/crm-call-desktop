import SettingHeader from '../../components/SettingHeader';
import CallDockPlacementSetting from './CallDockPlacementSetting';
import { LanguageSetting } from './LanguageSetting';

const General = () => {
  return (
    <div
      className="h-flex-col h-fill-w"
      style={{
        padding: '12px 16px',
      }}
    >
      <SettingHeader title="General" />
      <LanguageSetting />
      <CallDockPlacementSetting />
    </div>
  );
};

export default General;
