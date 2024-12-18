import React from 'react';
import HanTextField from './HanTextField';
import { ReactComponent as IcSearch } from '@renderer/resources/images/ic_search.svg';
import { useTheme } from '@mui/material';

const HanSearchField = () => {
  const theme = useTheme();

  return (
    <HanTextField
      placeholder="Search ..."
      startAdornment={
        <IcSearch
          key={'ic_search'}
          style={{ color: theme.palette.text.primary }}
        />
      }
    />
  );
};

export default HanSearchField;
