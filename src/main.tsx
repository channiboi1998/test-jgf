import '@assets/css/fonts.css';
import '@assets/css/index.css';
import '@core/i18n';
import { router } from '@router/router';
import { EnvironmentConfig } from '@shared/models';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

declare global {
  interface Window {
    environment: EnvironmentConfig;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
