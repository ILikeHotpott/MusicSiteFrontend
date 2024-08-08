import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const ScrollGallery = ({ images, speed=1.5, direction, size, margin= 10 }) => {
  const [offset, setOffset] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const width = galleryRef.current.scrollWidth / 2; // width of the duplicated content
        setOffset((prevOffset) => {
          const newOffset = prevOffset + (direction === 'right' ? speed : -speed);
          // Ensure the offset stays within the bounds of the content width to avoid the blank space
          if (newOffset <= -width) {
            return 0;
          } else if (newOffset >= 0) {
            return -width;
          }
          return newOffset;
        });
      }
    };

    const intervalId = setInterval(handleScroll, 16); // roughly 60fps
    return () => clearInterval(intervalId);
  }, [speed, direction]);

  return (
    <div className="gallery-wrapper">
      <div
        className="gallery"
        ref={galleryRef}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index}`}
            style={{
              height: `${size}px`,
              width: `${size}px`,
              marginLeft: `${margin}px`,
              borderRadius: '0.75rem'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollGallery;
