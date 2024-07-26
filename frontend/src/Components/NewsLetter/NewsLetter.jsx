import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email'placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
