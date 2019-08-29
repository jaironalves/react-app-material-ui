import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Routes from './Routes'

import theme from './MuiTheme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseLine />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
