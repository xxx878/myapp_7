import React from 'react'
import "./Men.css"


const Men = ({img1, men_name, men_price}) => {

  return (
    <>
        <div className='Men'>
        <img src={img1} alt="img product" />
        <p className='men_name'>{men_name}</p>
        <p className="men_price">{men_price}</p>
        <button className="men_add">Add</button>
      </div>

    </>


  )
}


export default Men