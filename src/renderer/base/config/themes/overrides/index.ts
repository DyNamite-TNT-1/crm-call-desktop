import { Theme } from '@mui/material/styles';
import merge from 'lodash/merge';
import OutlinedInput from './OutlinedInput';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentOverrides(theme: Theme) {
  return merge(OutlinedInput(theme));
}
