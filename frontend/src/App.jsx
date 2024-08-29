import { useState } from 'react'
import './App.css'

import {
  Box
} from '@chakra-ui/react'

import Navbar from './Components/Navbar/navbar'
import RouteManager from './Routes/routeManager'
import Footer from './Components/Footer/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box className='app' >
      <Navbar />
      <RouteManager />
      <Footer />
    </Box>
  )
}

export default App
