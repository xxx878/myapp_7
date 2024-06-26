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

import img7 from './assets/imgWomen/img7.jpeg'
import img8 from './assets/imgWomen/img8.jpeg'
import img9 from './assets/imgWomen/img9.jpeg'
import img10 from './assets/imgWomen/img10.jpeg'
import img11 from './assets/imgWomen/img11.jpeg'
import img12 from './assets/imgWomen/img12.jpeg'


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

const Woman = [
  {
    image: img7,
    title: 'Широкие шорты из хлопка',
    price: '2 999'
  },
  {
    image: img8,
    title: 'Брюки прямого кроя изо льна',
    price: '2 999'
  },
  {
    image: img9,
    title: 'Свободная футболка с карманом',
    price: '1 999'
  },
  {
    image: img10,
    title: 'Хлопковое платье с драпировкой',
    price: '3 599'
  },
  {
    image: img11,
    title: 'Вязаное платье миди в полоску',
    price: '3 599'
  },
  {
    image: img12,
    title: 'Джинсы wide leg с разрывами',
    price: '3 999'
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
        {
          Women.map(item => (
            <Woman 
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

