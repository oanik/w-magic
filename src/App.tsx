import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import {FormControlLabel, Grid} from '@mui/material';

import {SwitchBtn} from './SwitchBtn';
import {DarkBlock} from './DarkBlock/DarkBlock';
import {WhiteBlock} from './WhiteBlock/WhiteBlock';

import './App.css'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div className={theme.palette.mode === 'dark' ? 'app' : ''}>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: '100%',
        height: '100%',
        bgcolor: 'transparent',
        color: 'text.primary',
        p: 3,
        margin: 0,
      }}>
        <div className='control-element-top'>
          <FormControlLabel
            onClick={colorMode.toggleColorMode} color="inherit"
            control={<SwitchBtn sx={{ m: 1 }} defaultChecked />}
            label=""
            style={{marginRight: '24px'}}
          />
        </div>

        <Grid 
          item 
          xs={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
          }}
        >
          {theme.palette.mode === 'dark'? (
            <DarkBlock />
            ) : ( 
            <WhiteBlock /> 
            )
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}