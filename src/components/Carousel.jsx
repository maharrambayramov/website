import React from 'react'
import "../css/Main.css"

const Carousel = ({ title }) => {
  return (
    <div className='carusel'>
      <div className="carusel-text">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
        <div className="carousel-btn">
          <button className='start'>Get Started</button>
          <button className='download'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Carousel