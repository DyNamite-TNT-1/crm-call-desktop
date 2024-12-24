import HanHistory from '@renderer/crmcall/components/HanHistory/HanHistory';
import React from 'react';
import General from './General/General';

const CallList = () => {
  return (
    <div className={'h-flex-row h-fill-h'}>
      <div
        style={{
          flexBasis: '40%',
          flexGrow: 0,
          maxWidth: '40%',
          overflowY: 'auto',
          maxHeight: '100%',
        }}
      >
        <General />
      </div>
      <div
        style={{ flexBasis: '60%', flexGrow: 0, maxWidth: '60%', padding: 10 }}
      >
        <HanHistory />
      </div>
    </div>
  );
};

export default CallList;
