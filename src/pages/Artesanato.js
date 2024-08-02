import React from 'react';
import Comments from '../components/Comments';
import Recipe from '../components/Recipe';

// Importando as Imagens
import ceramicaImg from '../assets/images/ceramica.png';
import rendaImg from '../assets/images/renda.png';
import trancadoImg from '../assets/images/trancado.png';
import biojoiasImg from '../assets/images/biojoias.png';
import madeiraImg from '../assets/images/madeira.png';
import cestariaImg from '../assets/images/cestaria.png';

const Artesanato = () => {
  return (
    <section id="artesanato">
      <h2>Artesanato Maranhense</h2>
      <p>O artesanato maranhense é diverso e inclui cerâmica, renda, trançado, biojoias e trabalho em madeira, refletindo a riqueza cultural da região. Aqui estão algumas imagens representativas de cada tipo de artesanato:</p>
      
      <h3>Cerâmica</h3>
      <div className="recipe-container">
        <Recipe
          title="Cerâmica Maranhense"
          name = "Materiais"
          desc = "Produtos"
          itens="Argila, técnicas tradicionais indígenas e europeias."
          descricao="Produção de panelas, potes, pratos e esculturas com técnicas de modelagem manual e queima em fornos tradicionais."
          image={ceramicaImg}
        />

        <Recipe
          title="Renda Maranhense"
          name = "Materiais"
          desc = "Produtos"
          itens="Fios de algodão ou linha, técnicas de bilro e agulha."
          descricao="Criação de vestuário, acessórios e itens decorativos com influências portuguesas, utilizando técnicas tradicionais."
          image={rendaImg}
        />

        <Recipe
          title="Trançado Maranhense"
          name = "Materiais"
          desc = "Produtos"
          itens="Palha de buriti, fibra de babaçu."
          descricao="Produção de cestas, chapéus, esteiras e bolsas com técnicas de trançado manual herdadas das culturas indígena e afrodescendente."
          image={trancadoImg}
        />

        <Recipe
          title="Biojoias Maranhenses"
          name = "Materiais"
          desc = "Produtos"
          itens="Sementes, fibras, conchas e outros elementos naturais."
          descricao="Confecção de colares, pulseiras, brincos e acessórios decorativos, promovendo o uso consciente dos recursos naturais."
          image={biojoiasImg}
        />

        <Recipe
          title="Trabalho em Madeira Maranhense"
          name = "Materiais"
          desc = "Produtos"
          itens="Madeira, técnicas de escultura e marcenaria."
          descricao="Criação de móveis rústicos, esculturas, brinquedos e peças decorativas, com influências indígenas e europeias."
          image={madeiraImg}
        />

        <Recipe
          title="Cestaria Maranhense"
          name = "Materiais"
          desc = "Produtos"
          itens="Cipó, palha de buriti, fibra de babaçu."
          descricao="Produção de cestos, balaios, esteiras e outros objetos utilitários e decorativos com técnicas de trançado manual."
          image={cestariaImg}
        />
      </div>
      <Comments />
    </section>
  );
};

export default Artesanato;
