import { ReactNode, createContext, useContext, useState } from 'react';
import { DIALOG_COMPONENTS_CONFIG } from './componentConfig';

export type EnhancedDialogType =
  | 'APP_SETTING_DIALOG'
  | 'CALL_DETAIL_DIALOG'
  | 'LOGOUT_DIALOG';

export type EnhancedDialogProps<T = any> = {
  /**
   * dialogKey to render multiple dialogs.
   * This is being set automatically unless specified manually.
   */
  dialogKey?: number | string;
  dialogType: EnhancedDialogType;
  /**
   * On Close callback.
   */
  onClose?: () => void;
  /**
   * Additional props.
   */
  additionalProps?: T;
};

type DialogStackContextType = {
  dialogsPack: EnhancedDialogProps[];
  /**
   * To add a dialog.
   * @param dialog
   * @returns
   */
  addDialog: (dialog: EnhancedDialogProps) => void;
  /**
   * To remove a dialog.
   * @param dialog
   * @returns
   */
  removeDialog: (dialog: EnhancedDialogProps['dialogKey']) => void;
  /**
   * To remove dialogs.
   * @param dialogs
   * @returns
   */
  removeDialogs: (dialogs: EnhancedDialogProps['dialogKey'][]) => void;
};

const DialogStackContext = createContext<DialogStackContextType>({
  dialogsPack: [],
  addDialog: (dialog) => {},
  removeDialog: (dialogKey) => {},
  removeDialogs: (dialogKeys) => {},
});

export const DialogStackProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [dialogsPack, setDialogsPack] = useState<EnhancedDialogProps[]>([]);

  const addDialog = (dialog: EnhancedDialogProps) => {
    const dialogKey = dialog.dialogKey || Date.now();

    // Prevent duplicated dialogs
    if (dialogsPack.find((dialog) => dialog.dialogKey === dialogKey)) {
      return;
    }

    setDialogsPack((prevDialogPacks) => [
      ...prevDialogPacks,
      { ...dialog, dialogKey },
    ]);
  };

  const removeDialog = (dialogKey: EnhancedDialogProps['dialogKey']) => {
    setDialogsPack((prev) => [
      ...prev.filter((dialog) => dialog.dialogKey !== dialogKey),
    ]);
  };

  const removeDialogs = (dialogKeys: EnhancedDialogProps['dialogKey'][]) => {
    setDialogsPack((prev) => [
      ...prev.filter((dialog) => !dialogKeys.includes(dialog.dialogKey)),
    ]);
  };

  const renderComponent = () => {
    if (dialogsPack.length === 0) {
      return null;
    }
    return dialogsPack.map((dialog, index) => {
      const { dialogType, ...rest } = dialog;
      const DialogComponent = DIALOG_COMPONENTS_CONFIG[dialogType];
      if (!dialogType || !DialogComponent) {
        return null;
      }
      return <DialogComponent key={dialog.dialogKey} {...dialog} />;
    });
  };

  return (
    <DialogStackContext.Provider
      value={{
        dialogsPack: dialogsPack,
        addDialog: addDialog,
        removeDialog,
        removeDialogs,
      }}
    >
      {renderComponent()}
      {children}
    </DialogStackContext.Provider>
  );
};

// ==============================|| MODAL HOOKS ||============================== //

const useDialogStack = () => {
  const context = useContext(DialogStackContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useDialogStack;
