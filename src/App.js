import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import img1 from './assets/imgMen/img1.jpeg'
import img2 from './assets/imgMen/img2.jpeg'
import img3 from './assets/imgMen/img3.jpeg'
import img4 from './assets/imgMen/img4.jpeg'
import img5 from './assets/imgMen/img5.jpeg'
import img6 from './assets/imgMen/img6.jpeg'


const Man = [
  {
    image: img1,
    title: "Сорочка к.р. camminare",
    price: "4 250"
  },
  {
    image: img2,
    title: "Сорочка к.р. Black Stone черная",
    price: "3 250"
  },
  {
    image: img3,
    title: "Футболка NCS",
    price: "4 650"
  },
  {
    image: img4,
    title: "Брюки Camminare slim",
    price: "3 899"
  },
  {
    image: img5,
    title: "Сорочка Camminare slim",
    price: "4 250"}
    ,
  {
    image: img6,
    title: "Брюки Camminare half slim",
    price: "4 865"
  }
]



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/home' element={<Home />}/>  
            <Route path='/men' element={<Men />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/women' element={<Women />}/>
        {
          Men.map(item => (
            <Man  
            image={item.image}
            title={item.title}
            price={item.price}
            />
          ))
        }
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;

