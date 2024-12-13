import { IconButton } from '@mui/material';
import CRMToolTip from '../CRMTooltip';
import { Minimize, Close, CheckBoxOutlineBlank } from '@mui/icons-material';

export type ToolItemType = 'maximize' | 'minimize' | 'close';

type Props = {
  items?: ToolItemType[];
  onMaximize?: () => void;
  onMinimize?: () => void;
  onClose?: () => void;
};

export const DialogToolbar = (props: Props) => {
  const { items = ['close'], onClose, onMaximize, onMinimize } = props;

  const renderIconButton = (item: ToolItemType) => {
    switch (item) {
      case 'minimize':
        return (
          <CRMToolTip key="minimize" title="Minimize" placement="top">
            <IconButton size="small" onClick={onMinimize}>
              <Minimize />
            </IconButton>
          </CRMToolTip>
        );
      case 'maximize':
        return (
          <CRMToolTip key="maximize" title="Maximize" placement="top">
            <IconButton size="small" onClick={onMaximize}>
              <CheckBoxOutlineBlank />
            </IconButton>
          </CRMToolTip>
        );
      case 'close':
        return (
          <CRMToolTip key="close" title="Close" placement="top">
            <IconButton size="small" onClick={onClose}>
              <Close />
            </IconButton>
          </CRMToolTip>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-flex-row h-cgap-8">{items.map(renderIconButton)}</div>
  );
};
