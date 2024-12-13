import { createRoot } from 'react-dom/client';
import React from 'react';
import { RecoilRoot } from 'recoil';
import App from './base/app';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
