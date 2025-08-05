import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ✅ ADD THIS
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>       {/* ✅ WRAP App INSIDE */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
