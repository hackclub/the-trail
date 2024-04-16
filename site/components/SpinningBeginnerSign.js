import { useState } from 'react';

const SpinningBeginnerSign = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleHover = () => {
    setIsHovered(true);
    setRotation(0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAnimationEnd = () => {
    if (isHovered) {
      const randomRotation = Math.random() * 360 * 5;
      setRotation(randomRotation);
    }
  };

  return (
    <div 
      style={{
        position: "relative",
        width: 86, 
        height: 86, 
        right: 16, 
        zIndex: 2, 
        top:164,
        transition: "transform 5s",
        transform: `rotate(${rotation}deg)`,
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onAnimationEnd={handleAnimationEnd}
      onTouchStart={handleHover}
      onTouchEnd={handleMouseLeave}
    >
      <img 
        style={{
          position: "absolute", 
          width: "100%", 
          height: "100%", 
          top: 0, 
          left: 0,
        }} 
        src="beginnersWelcome.svg" 
      />
    </div>
  );
};

export default SpinningBeginnerSign;
