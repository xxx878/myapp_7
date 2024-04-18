import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/' element={<Home />}/>  
            <Route path='/men' element={<Men />}/> 
            <Route path='/about' element={<About />}/>
            <Route path='/women' element={<Women />}/> 

      </Routes>
    </BrowserRouter>

    
  );
}

export default App;

