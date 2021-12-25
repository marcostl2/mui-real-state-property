import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import LandingTemplate from './components/Templates/LandingTemplate';

import { theme } from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingTemplate />
      </div>
    </ThemeProvider>
  );
}

export default App;
