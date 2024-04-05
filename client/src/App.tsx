import { ThemeProvider } from '@mui/material'
import Navbar from './components/navbar'
import { theme } from './utils/mui'
import HomePage from './routes/HomePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full">
        <Navbar />
      </div>

      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  )
}

export default App
