import React from 'react'
// import sale from '../Assets/sale.jpg'
// import exclusive_image from '../Assets/exclusive_image.png'
// import red_girl from '../Assets/red_girl.png'
// import Girl_style from '../Assets/Girl_style.png'
import Offer_Girl from '../Assets/Offer_Girl.png';
import './Offers.css'
const Offers = () => {
  return (
    <div>
        
    <div className='Offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='offers-right'>
            <img src={Offer_Girl}  alt="" />

        </div>

    </div>
   
</div>

  )
}

export default Offers
