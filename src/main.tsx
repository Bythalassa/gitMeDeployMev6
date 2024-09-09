import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path if necessary

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
