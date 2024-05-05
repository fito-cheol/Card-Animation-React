import React, { useEffect, useState, useMemo } from 'react';
import './App.scoped.scss';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext } from './context/ColorModeContext';
import PlayerCard from 'components/Card/PlayerCard';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='container'>
          <PlayerCard
            player={{
              player: {
                nickName: '손흥민',
                role: 0,
                picture:
                  'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT8lnTegzfhRU7K4n1y2VgQhUyVmFZWCnyNPFQnVT6Iw4ScgKoIoGPvNvmmoGTg2NSAzdAXifddiiumynE',
              },
            }}
          />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
