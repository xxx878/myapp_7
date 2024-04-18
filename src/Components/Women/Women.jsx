import React from 'react'
import './Women.css'

const Women = ({img7, women_name, women_price}) => {

  
  return (
    <>
      <div className='Women'>
        <img src={img7} alt="img product" />
        <p className="women_name">{women_name}</p>
        <p className="women_price">{women_price}</p>
        <button className="women_add">Add</button>
      </div>
    </>

  )
}

export default Women