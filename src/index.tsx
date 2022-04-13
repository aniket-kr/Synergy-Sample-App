import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!
);
