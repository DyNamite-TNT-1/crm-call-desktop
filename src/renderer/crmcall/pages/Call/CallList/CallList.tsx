import HanHistory from '@renderer/crmcall/components/HanHistory/HanHistory';
import React from 'react';
import General from './components/General';

const CallList = () => {
  return (
    <div className={'h-flex-row'} style={{}}>
      <div style={{ flex: 2 }}>
        <General />
      </div>
      <div style={{ flex: 3, padding: 10 }}>
        <HanHistory />
      </div>
    </div>
  );
};

export default CallList;
