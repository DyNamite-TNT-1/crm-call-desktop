import React from 'react';
import { PhoneCallback } from '@mui/icons-material';
import './HanAnimationIcon.css';

const HanAnimationIncomingIcon = () => {
  return (
    <div className="wrapIconLv2">
      <div className="wrapIconLv1">
        <div className="wrapIcon">
          <PhoneCallback
            style={{
              fontSize: '15px',
              color: 'white',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HanAnimationIncomingIcon;
