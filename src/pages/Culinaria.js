// // src/pages/Culinaria.js
// import React from 'react';
// import Gallery from '../components/Gallery';
// import Comments from '../components/Comments';

// const Culinaria = () => {
//   const culinaryImages = [
//     '/assets/images/culinary1.jpg',
//     '/assets/images/culinary2.jpg',
//     '/assets/images/culinary3.jpg'
//   ];

//   return (
//     <section id="culinaria">
//       <h2>Culinária Maranhense</h2>
//       <p>A culinária do Maranhão é rica e variada, com pratos típicos que refletem a diversidade cultural do estado. Entre os pratos mais conhecidos estão o arroz de cuxá, a torta de camarão e o sururu. Aqui estão algumas imagens dos pratos típicos:</p>
//       <Gallery images={culinaryImages} />
//       <Comments />
//     </section>
//   );
// };

// export default Culinaria;

import React from 'react';
import Gallery from '../components/Gallery';
import Comments from '../components/Comments';

const Culinaria = () => {
  const culinaryImages = [
    '/assets/images/img1.jpg',
    '/assets/images/img1.jpg',
    '/assets/images/img1.jpg'
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
