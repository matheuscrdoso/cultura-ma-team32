import React from 'react';
import Comments from '../components/Comments';
import Recipe from '../components/Recipe';
import Map from '../components/Map';

// Importando as Imagens
import lencoisImg from '../assets/images/lencois.png'; 
import centroHistoricoImg from '../assets/images/centroHistorico.png';
import alcantaraImg from '../assets/images/alcantara.png'; 
import chapadaMesasImg from '../assets/images/chapadaMesas.png'; 
import cachoeiraItapecuruImg from '../assets/images/cachoeiraItapecuru.png';
import praiaAtinsImg from '../assets/images/praiaAtins.png'; 

const PontosTuristicos = () => {
  return (
    <section id="turismo">
      <h2>Pontos Turísticos</h2>
      <p>O Maranhão é um estado rico em belezas naturais e históricas, oferecendo uma diversidade de atrações que encantam visitantes de todo o mundo. Dentre os principais pontos turísticos, destacam-se os deslumbrantes Lençóis Maranhenses, o charmoso Centro Histórico de São Luís e a pitoresca cidade de Alcântara.</p>

      <div className="recipe-container">
        
        <Recipe
          title="Lençóis Maranhenses"
          ingredients="Dunas de areia branca, lagoas de água cristalina."
          instructions="Explore as vastas dunas e lagoas formadas pela chuva, com atividades como passeios de jipe, caminhadas e banhos nas lagoas."
          image={lencoisImg}
        />

        
        <Recipe
          title="Centro Histórico de São Luís"
          ingredients="Arquitetura colonial portuguesa, azulejos coloridos."
          instructions="Visite o Palácio dos Leões, o Teatro Arthur Azevedo e outros pontos históricos, enquanto aprecia a arquitetura colonial bem preservada."
          image={centroHistoricoImg}
        />

      
        <Recipe
          title="Alcântara"
          ingredients="Ruínas coloniais, casarões antigos."
          instructions="Passeie pelo centro histórico e explore as ruínas e edificações antigas da cidade, com atrações como o Museu Histórico e a Praia de Itatinga."
          image={alcantaraImg}
        />

     
        <Recipe
          title="Parque Nacional da Chapada das Mesas"
          ingredients="Chapadões, cânions, cachoeiras."
          instructions="Aproveite as paisagens deslumbrantes, incluindo cachoeiras e morros, ideais para ecoturismo e aventura."
          image={chapadaMesasImg}
        />

     
        <Recipe
          title="Cachoeira do Itapecuru"
          ingredients="Quedas d'água, piscinas naturais."
          instructions="Desfrute de banhos nas cachoeiras e trilhas em meio à vegetação exuberante."
          image={cachoeiraItapecuruImg}
        />

   
        <Recipe
          title="Praia de Atins"
          ingredients="Águas calmas, kitesurf."
          instructions="Relaxe na praia tranquila, pratique kitesurf e explore a beleza natural ao redor."
          image={praiaAtinsImg}
        />


      </div>
      <h3>Localização Pontos Turisticos</h3>
      <Map />

        <h3>Papel do Turismo na Cultura e Economia Local</h3>
        <p>O turismo no Maranhão desempenha um papel crucial na preservação e valorização do patrimônio cultural e histórico do estado. Eventos culturais e festivais promovem a cultura local e fortalecem a identidade maranhense. Além disso, o turismo é uma importante fonte de renda, contribuindo para o desenvolvimento econômico local e sustentando as comunidades através de empregos e investimentos em infraestrutura.</p>
      <Comments />
    </section>
  );
};

export default PontosTuristicos;
