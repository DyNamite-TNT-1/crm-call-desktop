import { Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { OptionValue } from '@renderer/base/types/common';

import CRMSelectBox from '@renderer/crmcall/components/CRMSelectBox';
import HanTextField from '@renderer/crmcall/components/TextField/HanTextField';
import {
  HistoryRow,
  CallDirectionType,
  PhoneType,
  PriorityType,
} from '@renderer/crmcall/types/history';
import {
  callDirectionTypeToString,
  phoneTypeToString,
  priorityTypeToString,
  stringToCallDirectionType,
  stringToPhoneType,
  stringToPriorityType,
} from '@renderer/crmcall/utils/converter/history';

const PHONE_TYPES: OptionValue[] = [
  {
    keyName: PhoneType[PhoneType.MANUALLY_INPUT].toLowerCase(),
    languageKey: 'Manually Input',
  },
  { keyName: PhoneType[PhoneType.MOBILE].toLowerCase(), languageKey: 'Mobile' },
  {
    keyName: PhoneType[PhoneType.COMPANY_PHONE].toLowerCase(),
    languageKey: 'Company Phone',
  },
  {
    keyName: PhoneType[PhoneType.TELEPHONE].toLowerCase(),
    languageKey: 'Telephone (Home)',
  },
  {
    keyName: PhoneType[PhoneType.COMPANY_FAX].toLowerCase(),
    languageKey: 'Company Fax',
  },
];

const CALL_DIRECTION_OPTIONS: OptionValue[] = [
  { keyName: 'incoming', languageKey: 'Incoming' },
  { keyName: 'outgoing', languageKey: 'Outgoing' },
];

const PRIORTY_TYPES: OptionValue[] = [
  { keyName: 'low', languageKey: 'Low' },
  { keyName: 'normal', languageKey: 'Normal' },
  { keyName: 'hight', languageKey: 'High' },
];

const General = () => {
  const theme = useTheme();

  const [historyValue, setHistoryValue] = useState<HistoryRow>({
    id: 'empty_id',
    direction: CallDirectionType.INCOMING,
    duration: 11,
    phone: '09xxxxx123',
    phoneType: PhoneType.TELEPHONE,
    company: '',
    authorName: '',
    regDate: Date.now(),
    priority: PriorityType.NORMAL,
    assignedName: '',
    subject: '',
    content: '',
  });

  const handleChangeCallDirection = (nDirectionString: string) => {
    const nDirection = stringToCallDirectionType(nDirectionString);

    if (!nDirection) {
      return;
    }

    setHistoryValue((prev) => {
      return {
        ...prev,
        callDirection: nDirection,
      };
    });
  };

  const handleChangeCallDuration = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const inputValue = event.target.value;
    const isValid = event.target.validity.valid || inputValue === '';
    if (isValid) {
      setHistoryValue((prev) => {
        return {
          ...prev,
          callDuration: +inputValue,
        };
      });
    }
  };

  const handleChangePhone = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setHistoryValue((prev) => {
      return {
        ...prev,
        phone: event.target.value,
      };
    });
  };

  const handleChangePhoneType = (nPhoneTypeString: string) => {
    const nPhoneType = stringToPhoneType(nPhoneTypeString);

    if (!nPhoneType) {
      return;
    }

    setHistoryValue((prev) => {
      return {
        ...prev,
        phoneType: nPhoneType,
      };
    });
  };

   const handleChangePriorityType = (nPriorityString: string) => {
     const nPriority = stringToPriorityType(nPriorityString);

     if (!nPriority) {
       return;
     }

     setHistoryValue((prev) => {
       return {
         ...prev,
         priority: nPriority,
       };
     });
   };

  return (
    <div className="h-flex-col h-px-12 h-py-12 h-rgap-12">
      <SectionContainer className="h-flex-row h-center-between h-cgap-12">
        <div className="h-flex-row h-cgap-4" style={{ flex: 1 }}>
          <Label>Call Direction</Label>
          <CRMSelectBox
            size="small"
            options={CALL_DIRECTION_OPTIONS}
            value={CALL_DIRECTION_OPTIONS.find(
              (opt) =>
                opt.keyName ===
                callDirectionTypeToString(historyValue.direction),
            )}
            onChange={(val) => handleChangeCallDirection(val.keyName)}
          />
        </div>
        <div className="h-flex-row h-cgap-4" style={{ flex: 1 }}>
          <Label>Call Duration</Label>
          <HanTextField
            value={historyValue.duration.toString()}
            onChange={handleChangeCallDuration}
            endAdornment={
              <Typography variant="h5Normal">(second(s))</Typography>
            }
            pattern="[0-9]*"
          />
        </div>
      </SectionContainer>
      <SectionContainer className="h-flex-col h-rgap-12">
        <div className={'h-flex-row'}>
          <div
            style={{
              width: '25%',
              alignSelf: 'center',
            }}
          >
            <Label>Phone</Label>
          </div>
          <div
            className={'h-flex-row h-cgap-12'}
            style={{
              width: '75%',
            }}
          >
            <HanTextField
              value={historyValue.phone}
              onChange={handleChangePhone}
            ></HanTextField>
            <CRMSelectBox
              size="small"
              options={PHONE_TYPES}
              value={PHONE_TYPES.find((value) => {
                return (
                  value.keyName === phoneTypeToString(historyValue.phoneType)
                );
              })}
              onChange={(val) => handleChangePhoneType(val.keyName)}
            />
          </div>
        </div>
        <div className={'h-flex-row'}>
          <div
            style={{
              width: '25%',
              alignSelf: 'center',
            }}
          >
            <Label>Name</Label>
          </div>
          <div
            style={{
              width: '75%',
            }}
          >
            <HanTextField
              value={historyValue.authorName}
              disabled
            ></HanTextField>
          </div>
        </div>
        <div className={'h-flex-row'}>
          <div
            style={{
              width: '25%',
              alignSelf: 'center',
            }}
          >
            <Label>Company</Label>
          </div>
          <div
            style={{
              width: '75%',
            }}
          >
            <HanTextField value={historyValue.company} disabled></HanTextField>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="h-flex-col h-rgap-12">
        <div className={'h-flex-row'}>
          <div
            className={'h-flex-row'}
            style={{
              width: '50%',
            }}
          >
            <div
              style={{
                width: '50%',
                alignSelf: 'center',
              }}
            >
              <Label>Date</Label>
            </div>
            <div
              style={{
                width: '50%',
                alignSelf: 'center',
              }}
            >
              <Typography variant={'h5Normal'}>2024/12/10 10:01</Typography>
            </div>
          </div>
          <div
            className={'h-flex-row'}
            style={{
              width: '50%',
            }}
          >
            <div
              style={{
                width: '50%',
                alignSelf: 'center',
              }}
            >
              <Label>Priority</Label>
            </div>
            <div
              style={{
                width: '50%',
              }}
            >
              <CRMSelectBox
                size="small"
                options={PRIORTY_TYPES}
                value={PRIORTY_TYPES.find((value) => {
                  return (
                    value.keyName ===
                    priorityTypeToString(historyValue.priority)
                  );
                })}
                onChange={(val) => handleChangePriorityType(val.keyName)}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default General;

const SectionContainer = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const theme = useTheme();
  return (
    <div
      className={'h-px-16 h-py-12 ' + className}
      style={{
        borderRadius: '4px',
        border: `1px solid ${theme.palette.divider}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Typography
      variant={'h4Normal'}
      sx={{
        color: theme.palette.text.secondary,
        // whiteSpace: 'nowrap',
        alignSelf: 'center',
      }}
    >
      {children}
    </Typography>
  );
};
