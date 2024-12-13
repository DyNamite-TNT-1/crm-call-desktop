import { Tooltip, TooltipProps } from '@mui/material';

const CRMToolTip = (props: TooltipProps) => {
  return (
    <Tooltip {...props} disableInteractive>
      {props.children}
    </Tooltip>
  );
};

export default CRMToolTip;
