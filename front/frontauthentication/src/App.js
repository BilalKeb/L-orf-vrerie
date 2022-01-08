import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Pages/Login'
import Admin from './Pages/Admin';
import Error from './Pages/Error';

function App() {
  return (
    
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/error" element={<Error/>}/>
    </Routes>
  </BrowserRouter>

    
  );
}

export default App;
