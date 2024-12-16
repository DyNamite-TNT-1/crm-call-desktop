import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  SxProps,
  FormControlOwnProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  type?: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  placeholder?: string;
  sx?: SxProps;
  obcureText?: boolean;
  endAdornment?: React.ReactNode | React.ReactNode[];
  margin?: FormControlOwnProps['margin'];
  pattern?: string;
};

const EnhancedTextField = (props: Props) => {
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
    endAdornment,
    margin = 'none',
    pattern,
  } = props;

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

  return (
    <TextField
      fullWidth
      size="small"
      margin={margin}
      required={required}
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      type={isObcureText ? 'password' : type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        '& .MuiOutlinedInput-root': {
          p: '0px',
          height: '40px',
        },
        ...sx,
      }}
      slotProps={{
        input: {
          endAdornment: renderEndAdornment(),
        },
        htmlInput: {
          pattern,
        },
      }}
    />
  );
};

export default EnhancedTextField;
