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
      <p>O Maranhão é um estado que se destaca por sua rica combinação de belezas naturais e históricas, proporcionando uma variedade de atrações para encantar visitantes de todas as partes do mundo. Entre os destinos imperdíveis estão os deslumbrantes Lençóis Maranhenses, um vasto deserto de dunas de areia branca intercaladas por lagoas de água cristalina, criando uma paisagem única e surreal.</p>

      <p>O charmoso Centro Histórico de São Luís, com seu conjunto arquitetônico colonial e ruas de paralelepípedos, revela o passado vibrante da cidade, oferecendo um mergulho na rica herança cultural e histórica da região. Seus casarões coloridos e o patrimônio histórico são um testemunho da influência portuguesa e africana na cultura local.</p>

      <p>Além disso, a pitoresca cidade de Alcântara, com suas ruínas históricas e atmosfera tranquila, proporciona uma experiência única ao explorar o passado colonial e os vestígios de antigas construções. Alcântara é também um ótimo lugar para apreciar a beleza natural ao redor, com vistas deslumbrantes do Rio Preguiças e da baía de São Marcos.</p>

      <p>Esses pontos turísticos não apenas oferecem vistas deslumbrantes e experiências culturais enriquecedoras, mas também convidam os visitantes a se conectar com a essência do Maranhão, celebrando sua diversidade e beleza.</p>

      <div className="recipe-container">
        
        <Recipe
          title="Lençóis Maranhenses"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Dunas de areia branca, lagoas de água cristalina."
          descricao="Explore as vastas dunas e lagoas formadas pela chuva, com atividades como passeios de jipe, caminhadas e banhos nas lagoas."
          image={lencoisImg}
        />

        
        <Recipe
          title="Centro Histórico de São Luís"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Arquitetura colonial portuguesa, azulejos coloridos."
          descricao="Visite o Palácio dos Leões, o Teatro Arthur Azevedo e outros pontos históricos, enquanto aprecia a arquitetura colonial bem preservada."
          image={centroHistoricoImg}
        />

      
        <Recipe
          title="Alcântara"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Ruínas coloniais, casarões antigos."
          descricao="Passeie pelo centro histórico e explore as ruínas e edificações antigas da cidade, com atrações como o Museu Histórico e a Praia de Itatinga."
          image={alcantaraImg}
        />

     
        <Recipe
          title="Parque Nacional da Chapada das Mesas"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Chapadões, cânions, cachoeiras."
          descricao="Aproveite as paisagens deslumbrantes, incluindo cachoeiras e morros, ideais para ecoturismo e aventura."
          image={chapadaMesasImg}
        />

     
        <Recipe
          title="Cachoeira do Itapecuru"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Quedas d'água, piscinas naturais."
          descricao="Desfrute de banhos nas cachoeiras e trilhas em meio à vegetação exuberante."
          image={cachoeiraItapecuruImg}
        />

   
        <Recipe
          title="Praia de Atins"
          name = "Caracteristicas do Lugar"
          desc = "Detalhes"
          itens="Águas calmas, kitesurf."
          descricao="Relaxe na praia tranquila, pratique kitesurf e explore a beleza natural ao redor."
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
