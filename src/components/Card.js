import React from 'react'
import './Card.css'

const Card = propos => (
    <div className="Card">
        <img src={propos.image}/>
        <h3>{propos.title}</h3>
        <p>{propos.text}</p>
    </div> 
)

export default Card