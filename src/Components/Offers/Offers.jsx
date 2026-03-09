import React from 'react'
import './Offers.css'
import Brand from '../../assets/brand.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Sellers Product</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={Brand} alt="" height="450px"/>
      </div> 
    </div>
  )
}

export default Offers