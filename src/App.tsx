import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from '../src/styles/global'
import { Router } from './Router'
import { CoffeeProvider } from './contexts/coffee'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
