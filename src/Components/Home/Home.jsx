import React from 'react'

import img1 from '../../assets/imgProduts/imgMen/img1.jpeg'
import img2 from '../../assets/imgProduts/imgMen/img2.jpeg'
import img3 from '../../assets/imgProduts/imgMen/img3.jpeg'
import img4 from '../../assets/imgProduts/imgMen/img4.jpeg'
import img5 from '../../assets/imgProduts/imgMen/img5.jpeg'
import img6 from '../../assets/imgProduts/imgMen/img5.jpeg'

import img7 from '../../assets/imgProduts/imgWomen/img7.jpg'
import img8 from '../../assets/imgProduts/imgWomen/img8.jpg'
import img9 from '../../assets/imgProduts/imgWomen/img9.jpg'
import img10 from '../../assets/imgProduts/imgWomen/img10.jpg'
import img11 from '../../assets/imgProduts/imgWomen/img11.jpg'
import img12 from '../../assets/imgProduts/imgWomen/img12.jpg'





const Man = [
  {
    imgMen: img1,
    men_name: "Сорочка к.р. camminare",
    men_price: "4 250"
  },
  {
    imgMen: img2,
    men_name: "Сорочка к.р. Black Stone черная",
    men_price: "3 250"
  },
  {
    imgMen: img3,
    men_name: "Футболка NCS",
    men_price: "4 650"
  },
  {
    imgMen: img4,
    men_name: "Брюки Camminare slim",
    men_price: "3 899"
  },
  {
    imgMen: img5,
    men_name: "Сорочка Camminare slim",
    men_price: "4 250"}
    ,
  {
    imgMen: img6,
    men_name: "Брюки Camminare half slim",
    men_price: "4 865"
  }
]

const Woman = [
  {
    imgWomen: img7,
    women_name: 'Широкие шорты из хлопка',
    women_price: '2 999'
  },
  {
    imgWomen: img8,
    women_name: 'Брюки прямого кроя изо льна',
    women_price: '2 999'
  },
  {
    imgWomen: img9,
    women_name: 'Свободная футболка с карманом',
    women_price: '1 999'
  },
  {
    imgWomen: img10,
    women_name: 'Хлопковое платье с драпировкой',
    women_price: '3 599'
  },
  {
    imgWomen: img11,
    women_name: 'Вязаное платье миди в полоску',
    women_price: '3 599'
  },
  {
    imgWomen: img12,
    women_name: 'Джинсы wide leg с разрывами',
    women_price: '3 999'
  }
]

function Home() {
  return (
   <>
   <h1>Home page</h1>
          <div className="cloth">
            {
              Man.map(man => (
                <Man  
                  imgMen={man.imgMen}
                  men_name={man.men_name}
                  men_price={man.men_price}
                />
              ))
            }
            {
              Woman.map(woman => (
                <Woman 
                  imgWomen={woman.imgWomen}
                  women_name={woman.women_name}
                  women_price={woman.women_price}
                />
              ))
            }
          </div>
   </>
  )
}

export default Home