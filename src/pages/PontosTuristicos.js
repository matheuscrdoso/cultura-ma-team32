import React from 'react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Comments from '../components/Comments';

const PontosTuristicos = () => {
  const tourismImages = [
    '/assets/images/tourism1.jpg',
    '/assets/images/tourism2.jpg',
    '/assets/images/tourism3.jpg'
  ];

  return (
    <section id="turismo">
      <h2>Pontos Turísticos</h2>
      <p>O Maranhão possui muitos pontos turísticos, como os Lençóis Maranhenses, o Centro Histórico de São Luís e a cidade de Alcântara. Explore alguns desses locais incríveis:</p>
      <Gallery images={tourismImages} />
      <Map />
      <Comments />
    </section>
  );
};

export default PontosTuristicos;
