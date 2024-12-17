import { AppSettingDialog } from '@renderer/crmcall/pages/dialogs/AppSetting/AppSetting';
import { CallDetailDialog } from '@renderer/crmcall/pages/dialogs/CallDetailDialog/CallDetailDialog';
import { EnhancedDialogType } from './DialogStackProvider';
import LogoutDialog from '@renderer/crmcall/pages/dialogs/LogoutDialog/LogoutDialog';

export const DIALOG_COMPONENTS_CONFIG: Record<EnhancedDialogType, any> = {
  APP_SETTING_DIALOG: AppSettingDialog,
  CALL_DETAIL_DIALOG: CallDetailDialog,
  LOGOUT_DIALOG: LogoutDialog,
};
