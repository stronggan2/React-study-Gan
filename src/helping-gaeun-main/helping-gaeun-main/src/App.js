import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material';

import Root from './pages';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <Root />
    </StyledEngineProvider>
  </ThemeProvider>
);

export default App;
