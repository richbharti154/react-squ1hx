import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RecoilRoot} from 'recoil'
import App from './App';
import Home from './Component/Home'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </StrictMode>
);
