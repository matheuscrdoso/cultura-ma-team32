import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

//Importando as Imagens
import logo1 from '../assets/images/img1.jpg';
import logo2 from '../assets/images/img1.jpg';
import logo3 from '../assets/images/img1.jpg';

const Artesanato = () => {
  const craftsImages = [
    logo1,logo2,logo3
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
