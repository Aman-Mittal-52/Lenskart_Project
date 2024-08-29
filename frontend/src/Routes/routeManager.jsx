import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../Components/Main/notFound'
import Home from '../Components/Main/Home'

function RouteManager() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default RouteManager