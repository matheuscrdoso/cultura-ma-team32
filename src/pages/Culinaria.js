import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

//Importando as Imagens
import logo1 from '../assets/images/img1.jpg';
import logo2 from '../assets/images/img1.jpg';
import logo3 from '../assets/images/img1.jpg';

const Culinaria = () => {
  const culinaryImages = [
    logo1,
    logo2,
    logo3
  ];

  return (
    <section id="culinaria">
      <h2>Culinária Maranhense</h2>
      <p>A culinária do Maranhão é rica e variada, com pratos típicos que refletem a diversidade cultural do estado. Entre os pratos mais conhecidos estão o arroz de cuxá, a torta de camarão e o sururu. Aqui estão algumas imagens dos pratos típicos:</p>
      <Gallery images={culinaryImages} />
      <Comments />
    </section>
  );
};

export default Culinaria;
