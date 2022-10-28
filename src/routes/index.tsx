import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from '../page/Detail'
import Home from '../page/Home'
 
const BRoutes = () => {
 return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />  
      <Route path='/detalhe' element={<Detail />} />  
    </Routes> 
  </Router>
 )
}

export default BRoutes
