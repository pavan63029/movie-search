import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movielist from './Movielist';
import Movielist2 from './Movielist2';
function App1() {
  return (
    <div>

      <BrowserRouter>
    
      <Routes>
        

     <Route path="/movielist" element={<Movielist />}></Route>
        <Route path='/' element={<Login />}>
          </Route></Routes>
      
    </BrowserRouter></div>
   
  )
}

export default App1