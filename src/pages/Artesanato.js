import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

const Artesanato = () => {
  const craftsImages = [
    '/assets/images/crafts1.jpg',
    '/assets/images/crafts2.jpg',
    '/assets/images/crafts3.jpg'
  ];

  return (
    <section id="artesanato">
      <h2>Artesanato Maranhense</h2>
      <p>O artesanato maranhense é diverso e inclui cerâmica, renda, trançado e outros trabalhos manuais que refletem a cultura local:</p>
      <Gallery images={craftsImages} />
      <Comments />
    </section>
  );
};

export default Artesanato;
