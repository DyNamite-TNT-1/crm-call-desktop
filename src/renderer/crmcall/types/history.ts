export enum CallDirectionType {
  INCOMING = 0,
  OUTGOING = 1
};

export enum PhoneType {
  MANUALLY_INPUT = 0,
  MOBILE = 1,
  COMPANY_PHONE = 2,
  TELEPHONE = 3,
  COMPANY_FAX = 4
}

export enum PriorityType {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
}

export type HistoryRow = {
  id: string;
  direction: CallDirectionType;
  duration: number;
  phone: string;
  phoneType: PhoneType;
  company: string;
  authorName?: string;
  regDate: number;
  priority: PriorityType;
  assignedName: string;
  purpose?: any; // unknown
  subject: string;
  content: string;
};


