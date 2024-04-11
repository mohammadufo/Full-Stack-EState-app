import { ThemeProvider } from '@mui/material'
import { theme } from '../utils/mui'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full">
        <Navbar />
      </div>

      <div className="h-[calc(100vh-6rem)]">
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
