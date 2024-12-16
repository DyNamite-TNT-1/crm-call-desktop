import CRMCallView from '@renderer/crmcall/components/CRMCallView/CRMCallView';
import CRMDialog from '@renderer/crmcall/components/Dialog/CRMDialog';
import useDialogStack, {
  TCDialogProps,
} from '@renderer/crmcall/view_providers/dialogstack/DialogStackProvider';
import React from 'react';

type Props = {};

export const CallDetailDialog = (props: TCDialogProps<Props>) => {
  const { dialogKey, onClose, additionalProps } = props;
  const { removeDialog } = useDialogStack();

  const handleCloseDialog = () => {
    onClose?.();
    removeDialog(dialogKey);
  };

  return (
    <>
      <CallDetailDialogContent onClose={handleCloseDialog} />
    </>
  );
};

const CallDetailDialogContent = ({ onClose }: { onClose: () => void }) => {

  return (
    <CRMDialog
      title={'Call'}
      isOpen={true}
      onClose={onClose}
      disablePortal={true}
    >
      <CRMCallView />
    </CRMDialog>
  );
};
