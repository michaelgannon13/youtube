import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    {/* wrapping entire app in ThemeProvider so darkMode:true/false can be passed down */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);