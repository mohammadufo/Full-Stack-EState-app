import { ThemeProvider } from '@mui/material'
import Navbar from './components/navbar'
import { theme } from './utils/mui'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full lg:container-lg px-4">
        <Navbar />

        <br />
        <br />
        <br />
        <br />
        <p className="">I love Alaa 💕</p>
      </div>
    </ThemeProvider>
  )
}

export default App
