import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

//Importando as Imagens
import logo1 from '../assets/images/img1.jpg';
import logo2 from '../assets/images/img1.jpg';
import logo3 from '../assets/images/img1.jpg';

const FestasPopulares = () => {
  const festivityImages = [
    logo1,
    logo2,
    logo3
  ];

  return (
    <section id="festas">
      <h2>Festas Populares</h2>
      <p>O Maranhão é famoso por suas festas populares, como o Bumba Meu Boi, Carnaval e festas religiosas. Essas celebrações são ricas em cores, danças e músicas típicas:</p>
      <Gallery images={festivityImages} />
      <Comments />
    </section>
  );
};

export default FestasPopulares;
