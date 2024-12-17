import { AppSettingDialog } from '@renderer/crmcall/pages/dialogs/AppSetting/AppSetting';
import { CallDetailDialog } from '@renderer/crmcall/pages/dialogs/CallDetailDialog/CallDetailDialog';
import { EnhancedDialogType } from './DialogStackProvider';

export const DIALOG_COMPONENTS_CONFIG: Record<EnhancedDialogType, any> = {
  APP_SETTING_DIALOG: AppSettingDialog,
  CALL_DETAIL_DIALOG: CallDetailDialog,
};
