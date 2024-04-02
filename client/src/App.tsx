import { useState } from 'react'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="bg-primary p-10">I love Alaa 💕</p>
      <span className="bg-yellow-500">hiii</span>
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
