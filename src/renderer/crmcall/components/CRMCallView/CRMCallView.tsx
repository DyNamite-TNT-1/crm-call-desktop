import { Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CRMSelectBox from '../CRMSelectBox';
import { OptionValue } from '@renderer/base/types/common';
import HanTextField from '../TextField/HanTextField';
import {
  CallValue,
  CallDirectionValue,
  PhoneType,
} from '@renderer/crmcall/types/call';

const PHONE_TYPES: OptionValue[] = [
  { keyName: 'manually_input', languageKey: 'Manually Input' },
  { keyName: 'mobile', languageKey: 'Mobile' },
  { keyName: 'company_phone', languageKey: 'Company Phone' },
  { keyName: 'telephone', languageKey: 'Telephone (Home)' },
  { keyName: 'company_fax', languageKey: 'Company Fax' },
];

const CALL_DIRECTION_OPTIONS: OptionValue[] = [
  { keyName: 'incoming', languageKey: 'Incoming' },
  { keyName: 'outgoing', languageKey: 'Outgoing' },
];

const CRMCallView = () => {
  const theme = useTheme();

  const [callValue, setCallValue] = useState<CallValue>({
    callDirection: 'incoming',
    callDuration: 1,
    phone: '',
    phoneType: 'manually_input',
    name: '',
    company: '',
  });

  const handleChangeCallDirection = (nDirection: CallDirectionValue) => {
    setCallValue((prev) => {
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
      setCallValue((prev) => {
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
    setCallValue((prev) => {
      return {
        ...prev,
        phone: event.target.value,
      };
    });
  };

  const handleChangePhoneType = (nPhoneType: PhoneType) => {
    setCallValue((prev) => {
      return {
        ...prev,
        phoneType: nPhoneType,
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
              (opt) => opt.keyName === callValue.callDirection,
            )}
            onChange={(val) =>
              handleChangeCallDirection(val.keyName as CallDirectionValue)
            }
          />
        </div>
        <div className="h-flex-row h-cgap-4" style={{ flex: 1 }}>
          <Label>Call Duration</Label>
          <HanTextField
            value={callValue.callDuration.toString()}
            onChange={handleChangeCallDuration}
            endAdornment={
              <Typography sx={{ pr: '8px' }}>(second(s))</Typography>
            }
            pattern="[0-9]*"
          />
        </div>
      </SectionContainer>
      <SectionContainer className="h-flex-col h-rgap-12">
        <div
          className={'h-flex-row'}
          style={{
            width: '100%',
          }}
        >
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
              value={callValue.phone}
              onChange={handleChangePhone}
            ></HanTextField>
            <CRMSelectBox
              size="small"
              options={PHONE_TYPES}
              value={PHONE_TYPES.find((value) => {
                return (value.keyName as PhoneType) === callValue.phoneType;
              })}
              onChange={(val) =>
                handleChangePhoneType(val.keyName as PhoneType)
              }
            />
          </div>
        </div>
        <div
          className={'h-flex-row'}
          style={{
            width: '100%',
          }}
        >
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
            <HanTextField value={callValue.name} disabled></HanTextField>
          </div>
        </div>
        <div
          className={'h-flex-row'}
          style={{
            width: '100%',
          }}
        >
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
            <HanTextField value={callValue.company} disabled></HanTextField>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CRMCallView;

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
      sx={{
        color: theme.palette.text.secondary,
        lineHeight: '22px',
        fontSize: theme.typography.fontSize,
        whiteSpace: 'nowrap',
        alignSelf: 'center',
      }}
    >
      {children}
    </Typography>
  );
};
