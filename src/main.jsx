import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes';
import { LanguageProvider } from './contexts/LanguageContext'; // Impor LanguageProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={routes} />
    </LanguageProvider>
  </StrictMode>
);
