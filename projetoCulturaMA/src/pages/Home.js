import React from 'react';
import Gallery from '../components/Gallery';

//Importando as Imagens
import logo1 from '../assets/images/img1.jpg';
import logo2 from '../assets/images/img1.jpg';
import logo3 from '../assets/images/img1.jpg';

const Home = () => {
  const festivityImages = [
    logo1,
    logo2,
    logo3,
    logo3,
    logo3,
  ];
  return (
    <section id="home">
      <h2>Bem-vindo ao Mergulho na Cultura Maranhense</h2>
      <p>Explore as diversas facetas da cultura do Maranhão, incluindo sua culinária, festas populares, artesanato e pontos turísticos. Use o menu acima para navegar pelas seções e descobrir mais sobre cada um desses aspectos culturais.</p>
      <Gallery images={festivityImages} />
    </section>
  );
};

export default Home;
