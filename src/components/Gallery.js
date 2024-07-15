// import React from 'react';
// import '../assets/styles/Gallery.css'; // Importar o CSS da galeria

// const Gallery = ({ images }) => {
//   return (
//     <div className="gallery">
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`gallery-img-${index}`} />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/Gallery.css'; // Crie um arquivo de estilos para o Gallery se necessário
import img1 from '../assets/images/img1.jpg';

const images = [img1];

const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`gallery-img-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;

