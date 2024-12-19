import React from 'react';

import {
  Breakpoint,
  Dialog,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material';

import { DialogToolbar, ToolItemType } from './DialogToolbar';

type Props = {
  title?: string | React.ReactElement;
  isOpen: boolean;
  size?: Breakpoint | false;
  children: React.ReactNode;
  onClose: () => void;
  onScroll?: (e: any) => void;
  disablePortal?: boolean;
  isCloseByBackdrop?: boolean; // accept close modal by click away on backdrop or not, default is false
  toolbarOptions?: ToolItemType[];
  AdditionalHeaderComponents?: any;
  sxDialog?: SxProps;
  isShowHeader?: boolean;
};

const CRMDialog = (props: Props) => {
  const theme = useTheme();

  const {
    title = 'Untitled Form',
    isOpen,
    size,
    children,
    onClose,
    isCloseByBackdrop = false,
    disablePortal = false,
    toolbarOptions = ['close'],
    AdditionalHeaderComponents,
    sxDialog,
    isShowHeader = true,
  } = props;

  const handleOnClose = (e: any, reason: 'escapeKeyDown' | 'backdropClick') => {
    if (reason == 'backdropClick' && !isCloseByBackdrop) {
      return;
    }
    onClose?.();
  };

  return (
    <Dialog
      disablePortal={disablePortal}
      maxWidth={size}
      fullWidth
      keepMounted
      onClose={handleOnClose}
      open={isOpen}
      sx={{
        ...sxDialog,
      }}
    >
      {isShowHeader && (
        <div
          className="h-flex-row h-center-between"
          style={{
            height: '40px',
            padding: '12px',
            backgroundColor: theme.palette.action.hover,
          }}
        >
          <div className="h-flex-row">
            <Typography variant="h6">{title}</Typography>
            {AdditionalHeaderComponents}
          </div>
          <DialogToolbar items={toolbarOptions} onClose={onClose} />
        </div>
      )}
      {children}
    </Dialog>
  );
};

export default CRMDialog;
