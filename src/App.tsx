import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from '../src/styles/global'
import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
