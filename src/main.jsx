import React from 'react';
import ReactDOM from 'react-dom/client';

import { Landing } from './pages';
import { ThemeProvider } from './components/ThemeContext/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  </React.StrictMode>
);
