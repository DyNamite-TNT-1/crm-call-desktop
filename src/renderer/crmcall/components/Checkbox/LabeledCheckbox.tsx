import { FormControlLabel, Checkbox, SxProps } from '@mui/material';

type Props = {
  label?: string;
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom' | undefined;
  value: boolean;
  onChange?: (val: boolean) => void;
  disabled?: boolean;
  sx?: SxProps;
  CustomCheckbox?: any;
};

const LabeledCheckbox = ({
  label,
  labelPlacement,
  value,
  onChange,
  disabled = false,
  sx,
  CustomCheckbox,
}: Props) => {
  const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
    onChange && onChange(checked);
  };

  return (
    <FormControlLabel
      onChange={handleChange}
      sx={{ ...sx }}
      control={
        CustomCheckbox ? (
          CustomCheckbox
        ) : (
          <Checkbox size="small" checked={value} />
        )
      }
      label={label ?? ''}
      labelPlacement={labelPlacement}
      disabled={disabled}
    />
  );
};

export default LabeledCheckbox;
