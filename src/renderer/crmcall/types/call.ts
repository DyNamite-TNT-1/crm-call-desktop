export type CallDirectionValue = 'incoming' | 'outgoing';

export type PhoneType =
  | 'manually_input'
  | 'mobile'
  | 'company_phone'
  | 'telephone'
  | 'company_fax';

export type CallValue = {
  callDirection: CallDirectionValue;
  callDuration: number;
  phone: string;
  phoneType: PhoneType;
  name: string;
  company: string;
};
