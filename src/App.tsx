import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/page/Detail';
import Home from './components/page/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/detalhe' element={<Detail />} />  
      </Routes> 
    </Router>
  );
}

export default App;
