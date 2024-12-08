import { useState } from 'react';
import './App.css';
import { lightTheme, darkTheme } from './mainTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return <>
    <ThemeProvider theme={isDark? darkTheme : lightTheme}>
      <CssBaseline />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Header />
    </ThemeProvider>
  </>;
}

export default App;
