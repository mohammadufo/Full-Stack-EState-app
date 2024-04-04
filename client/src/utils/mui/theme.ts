'use client'

import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00b96b',
    },
    secondary: {
      main: '#FF0000',
      light: '#ffcc00',
      dark: '#f50057',
    },
    info: {
      light: '#3b3b3b',
      main: '#2e2e2e',
      dark: '#252525',
      contrastText: '#171717',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
  },
})
