import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

const FestasPopulares = () => {
  const festivityImages = [
    '/assets/images/festivity1.jpg',
    '/assets/images/festivity2.jpg',
    '/assets/images/festivity3.jpg'
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
