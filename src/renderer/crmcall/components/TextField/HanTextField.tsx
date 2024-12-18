import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  SxProps,
  FormControlOwnProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  placeholder?: string;
  sx?: SxProps;
  obcureText?: boolean;
  startAdornment?: React.ReactNode | React.ReactNode[];
  endAdornment?: React.ReactNode | React.ReactNode[];
  margin?: FormControlOwnProps['margin'];
  pattern?: string;
};

const HanTextField = (props: Props) => {
  const {
    id,
    name,
    label,
    type = 'text',
    value,
    required = false,
    disabled = false,
    onChange,
    placeholder = '',
    sx,
    obcureText,
    startAdornment,
    endAdornment,
    margin = 'none',
    pattern,
  } = props;

  const theme = useTheme();

  const [isObcureText, setIsObcureText] = useState(obcureText ?? false);

  const handleToggleObcureText = () => {
    setIsObcureText(!isObcureText);
  };

  const renderEndAdornment = () => {
    const adornments: React.ReactNode[] = [];

    // Add password toggle button if obcureText is enabled
    if (obcureText) {
      adornments.push(
        <IconButton
          key="toggle-visibility"
          aria-label="toggle password visibility"
          onClick={handleToggleObcureText}
          onMouseDown={(event) => event.preventDefault()}
        >
          {isObcureText ? <VisibilityOff /> : <Visibility />}
        </IconButton>,
      );
    }

    // Add custom adornments passed via props
    if (endAdornment) {
      if (Array.isArray(endAdornment)) {
        adornments.push(...endAdornment);
      } else {
        adornments.push(endAdornment);
      }
    }

    return adornments.length > 0 ? (
      <InputAdornment position="end">{adornments}</InputAdornment>
    ) : null;
  };

  const renderStartAdornment = () => {
    const adornments: React.ReactNode[] = [];
    // Add custom adornments passed via props
    if (startAdornment) {
      if (Array.isArray(startAdornment)) {
        adornments.push(...startAdornment);
      } else {
        adornments.push(startAdornment);
      }
    }

    return adornments.length > 0 ? (
      <InputAdornment position="start">{adornments}</InputAdornment>
    ) : null;
  };

  return (
    <TextField
      fullWidth
      size="small"
      margin={margin}
      required={required}
      disabled={disabled}
      id={id}
      name={name}
      // label={label}
      type={isObcureText ? 'password' : type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        '& .MuiOutlinedInput-root': {
          height: '40px',
          backgroundColor: theme.palette.action.active,
          borderRadius: '10px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: 0,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: 0,
        },
        '& .MuiInputAdornment-positionStart': {
          marginRight: 0,
        },
        ...sx,
      }}
      slotProps={{
        input: {
          startAdornment: renderStartAdornment(),
          endAdornment: renderEndAdornment(),
        },
        htmlInput: {
          pattern,
        },
      }}
    />
  );
};

export default HanTextField;
