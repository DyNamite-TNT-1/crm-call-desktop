import { useEffect, useState, useMemo } from 'react';
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material';
import { OptionValueIcon } from '@renderer/base/types/common';

type Props = {
  value: OptionValueIcon | undefined;
  options: OptionValueIcon[];
  onChange: (val: OptionValueIcon) => void;
  size?: 'small' | 'medium' | undefined;
  sx?: SxProps;
  disablePortal?: boolean;
  useClear?: boolean;
  placeholder?: string;
  isDisable?: boolean;
  colorIconType?: 'light' | 'heavy';
  /**
   * Need confirmation before changing the selected value?
   *
   * If `true`, `value` needs to be confirmed and updated externally.
   *
   * @default false
   */
  needConfirmBeforeChange?: boolean;
  fullWidth?: boolean;
}

const CRMSelectBox = (props: Props) => {
  const {
    value,
    onChange,
    options,
    size,
    sx,
    disablePortal = false,
    useClear = false,
    placeholder = 'Select...',
    isDisable = false,
    colorIconType = 'light',
    needConfirmBeforeChange = false,
    fullWidth = true,
  } = props;
  const [selectedValue, setSelectedValue] = useState(value?.keyName ?? '');
  const theme = useTheme();

  useEffect(() => {
    if (value) {
      if (value.keyName !== selectedValue) {
        setSelectedValue(value.keyName);
      }
    }
  }, [value]);

  // value change
  const handleValueChange = (newValue: string) => {
    if (!needConfirmBeforeChange) {
      setSelectedValue(newValue);
    }
    // callback
    const foundItem = options.find(
      (v) => v.keyName == newValue,
    ) as OptionValueIcon;
    onChange && onChange(foundItem);
  };

  const onClearValue = () => {
    setSelectedValue('');
    onChange && onChange({ keyName: '', languageKey: '', icon: undefined });
  };

  const colorIcon = useMemo(() => {
    return colorIconType == 'light'
      ? theme.palette.mode === 'dark'
        ? theme.palette.grey[200]
        : theme.palette.grey.A200
      : theme.palette.mode === 'dark'
        ? theme.palette.grey[400]
        : theme.palette.grey[700];
  }, [colorIconType, theme.palette.mode]);

  return (
    <Select
      disabled={isDisable}
      fullWidth={fullWidth}
      displayEmpty
      inputProps={{ 'aria-label': 'select' }}
      size={size}
      value={selectedValue}
      MenuProps={{
        disablePortal: disablePortal, // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
      }}
      sx={{
        ...sx,
        '& .MuiSelect-iconOutlined': {
          display: useClear && selectedValue ? 'none' : '',
        },
        '&.Mui-focused .MuiIconButton-root': { color: 'primary.main' },
        '& .MuiSelect-icon': {
          opacity: 1,
          color: colorIcon,
        },
        '&:hover .MuiSelect-icon, &.Mui-focused .MuiSelect-icon': {
          color: (theme) => theme.palette.primary.main,
        },
      }}
      renderValue={(value) => {
        const selectedOption = options.find((v) => v.keyName == value);
        return (
          <>
            {selectedOption ? (
              <>
                {selectedOption?.color && (
                  <div
                    style={{
                      height: '20px',
                      width: '20px',
                      borderRadius: '3px',
                      backgroundColor: selectedOption.color,
                    }}
                  />
                )}
                {selectedOption?.languageKey && (
                  <Typography lineHeight={'24px'}>
                    {selectedOption.languageKey}
                  </Typography>
                )}
                {selectedOption?.icon && selectedOption.icon}
              </>
            ) : (
              <Typography color={'secondary'}>{placeholder}</Typography>
            )}
          </>
        );
      }} // render langkey on view
      endAdornment={
        useClear && selectedValue ? (
          <IconButton
            size="small"
            sx={{ visibility: selectedValue ? 'visible' : 'hidden' }}
            onClick={onClearValue}
          >
            {/* <Clear sx={{ fontSize: 18 }} /> */}
            <i className="fa-solid fa-xmark-large"></i>
          </IconButton>
        ) : (
          false
        )
      }
      onChange={(e: SelectChangeEvent<string>) => {
        const selected = e.target.value;
        handleValueChange(selected);
      }}
    >
      {options.map((_option: OptionValueIcon, _index: number) => {
        return (
          <MenuItem key={_index} value={_option.keyName}>
            <>
              {_option.color && (
                <div
                  style={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '3px',
                    backgroundColor: _option.color,
                  }}
                />
              )}
              {_option.languageKey}
              {_option.icon && _option.icon}
            </>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default CRMSelectBox;
