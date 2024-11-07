import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={routes} />
      <ToastContainer position="bottom-right" autoClose={1000} />
    </LanguageProvider>
  </StrictMode>
);
