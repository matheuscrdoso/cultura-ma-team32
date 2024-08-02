import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`gallery-img-${index}`} />
      ))}
    </div>
  );
};

export default Gallery;


