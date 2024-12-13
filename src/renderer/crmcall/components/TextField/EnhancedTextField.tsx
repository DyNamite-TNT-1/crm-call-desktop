import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, SxProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  sx?: SxProps;
  obcureText?: boolean;
};

const EnhancedTextField = (props: Props) => {
  const {
    id,
    name,
    label,
    type = 'text',
    value,
    onChange,
    placeholder = '',
    sx,
    obcureText,
  } = props;

  const [isObcureText, setIsObcureText] = useState(obcureText ?? false);

  const handleToggleObcureText = () => {
    setIsObcureText(!isObcureText);
  };

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      required
      id={id}
      name={name}
      label={label}
      type={isObcureText ? 'password' : type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
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
          endAdornment: obcureText && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleObcureText}
                onMouseDown={(event) => event.preventDefault()}
              >
                {isObcureText ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default EnhancedTextField;
