import React from 'react';
import { Link } from 'react-router-dom';
import culinariaImage from '../assets/images/culinaria.jpg';
import festasImage from '../assets/images/festas.jpg';
import artesanatoImage from '../assets/images/artesanato.jpg';
import turismoImage from '../assets/images/turismo.jpg';
import '../assets/styles/Home.css';

const Home = () => {
  const galleryItems = [
    { src: culinariaImage, alt: 'Culinária', link: '/culinaria', description: 'Descubra os sabores da culinária maranhense.' },
    { src: festasImage, alt: 'Festas Populares', link: '/festas', description: 'Explore as festas populares do Maranhão.' },
    { src: artesanatoImage, alt: 'Artesanato', link: '/artesanato', description: 'Admire o artesanato local.' },
    { src: turismoImage, alt: 'Turismo', link: '/turismo', description: 'Visite os pontos turísticos incríveis do Maranhão.' },
  ];

  return (
    <section id="home">
      <h2>Bem-vindo ao Mergulho na Cultura Maranhense</h2>
      <p>
        Descubra a rica e vibrante cultura do Maranhão! Este estado encantador no nordeste do Brasil é conhecido por sua culinária única, festas populares animadas, artesanato impressionante e deslumbrantes pontos turísticos. Navegue através das seções acima para explorar cada aspecto desta cultura fascinante e mergulhe nas tradições e belezas que tornam o Maranhão um lugar tão especial.
      </p>
      <br/>
      <p>
        Na seção de <strong>Culinária</strong>, você encontrará pratos tradicionais que refletem a diversidade e a riqueza dos ingredientes locais. Conheça os sabores e aromas que compõem a gastronomia maranhense e que são uma verdadeira celebração da cultura regional.
      </p>
      <p>
        Em <strong>Festas Populares</strong>, descubra como as tradições e a alegria do povo maranhense se manifestam em celebrações cheias de música, dança e cores. Desde o famoso Bumba Meu Boi até as festividades religiosas, cada evento é uma experiência inesquecível.
      </p>
      <p>
        Explore a seção de <strong>Artesanato</strong> para admirar a habilidade e a criatividade dos artesãos locais. Cerâmicas, rendas, e tecelagens são apenas alguns exemplos do trabalho detalhado e artístico que você encontrará aqui.
      </p>
      <p>
        Por fim, em <strong>Pontos Turísticos</strong>, viaje pelos cenários naturais e históricos do Maranhão. Descubra as dunas e lagoas dos Lençóis Maranhenses, o charme colonial do Centro Histórico de São Luís e muito mais.
      </p>
     
      <h3>Acesso Rápido</h3>
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <Link to={item.link}>
              <img src={item.src} alt={item.alt} className="gallery-image" />
            </Link>
            <p className="gallery-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;