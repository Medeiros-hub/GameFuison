import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import './index.sass'

interface CardProps {
  gameName: string
  gameImage: string
}

const Card: React.FC<CardProps> = ({
  gameName,
  gameImage
}) => {
  return (
    <>
      <section className='card-container'>
        <div className='card-description'>
          <div className='card-image'>
            <img src={gameImage} alt="" />
          </div>
          <div className="headers">
            <h2>{gameName}</h2>
            <h3>4 anúncios</h3>
          </div>
        </div>
      </section>
    </> 
  )
}

export default Card