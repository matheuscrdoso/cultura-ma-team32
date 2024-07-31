import React from 'react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Comments from '../components/Comments';

//Importando as Imagens
import logo1 from '../assets/images/saoluis.jpg';
import logo2 from '../assets/images/alcantara.jpg';
import logo3 from '../assets/images/lencois.jpg';

const PontosTuristicos = () => {
  const tourismImages = [
    logo1,logo2,logo3
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
