
import React from 'react'

export default function PortfolioItem(props) {



  return (
    <section className='portfolioItem' >
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <img src={props.thumbs} alt="" />
      </section>
 
      
  )
}
