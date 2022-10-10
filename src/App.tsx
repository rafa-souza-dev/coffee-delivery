import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from '../src/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>oi</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
