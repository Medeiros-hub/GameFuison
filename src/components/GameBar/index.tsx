import React, { useState } from "react";
import "./index.sass";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface GameBarProps {
  sectionTitle: string;
  children: React.ReactNode;
}

const GameBar: React.FC<GameBarProps> = ({ sectionTitle, children }) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const cardWidth = 200;
  const maxPosition = (React.Children.count(children) - 1) * cardWidth;
  
  const toLeft = () => {
    currentPosition != 0
      ? setCurrentPosition(currentPosition - cardWidth)
      : 0;
    
    console.log(currentPosition, maxPosition);
      
  };

  const toRight = () => {
    currentPosition != maxPosition
      ? setCurrentPosition(currentPosition + cardWidth)
      : 0;

    console.log(currentPosition, maxPosition);

  };

  return (
    <section className="games-container">
      <h1 className="rainbow">{sectionTitle}</h1>
      <div className="cards">
        <i className="pointer" onClick={toLeft}>
          <SlArrowLeft />
        </i>
        <div className="card-container">
          {React.Children.map(children, (child) => {
            return (
              <div
                className="card-wrapper"
                style={{
                  transition: 'all .5s ease-in-out',
                  transform: `translate(-${currentPosition}px)`,
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
        <i className="pointer" onClick={toRight}>
          <SlArrowRight />
        </i>
      </div>
    </section>
  );
};

export default GameBar;
