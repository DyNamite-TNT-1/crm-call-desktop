import { Theme } from '@mui/material/styles';
import merge from 'lodash/merge';
import Button from './Button';
import OutlinedInput from './OutlinedInput';
import Typography from './Typography';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentOverrides(theme: Theme) {
  return merge(Button(theme), OutlinedInput(theme), Typography());
}
