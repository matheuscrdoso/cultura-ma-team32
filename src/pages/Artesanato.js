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
      <p>O artesanato maranhense é um reflexo vibrante da riqueza cultural e da criatividade do estado. Com uma tradição que passa de geração em geração, o artesanato local é notável pela sua diversidade e pela qualidade de suas peças. Entre os tipos mais representativos estão a cerâmica, com suas formas e padrões únicos que capturam a essência da cultura regional; a renda, conhecida por seus intrincados e delicados trabalhos manuais; o trançado, que inclui desde itens utilitários até peças decorativas elaboradas; as biojoias, que combinam elementos naturais com design contemporâneo; e o trabalho em madeira, que resulta em belas esculturas e objetos ornamentais.</p>

      <p>Cada peça de artesanato maranhense conta uma história e representa a habilidade e o espírito dos artesãos locais. As cerâmicas, muitas vezes adornadas com desenhos e cores tradicionais, são testemunhas das técnicas ancestrais que continuam a ser apreciadas. As rendas e o trançado demonstram a minúcia e a paciência dos artesãos, enquanto as biojoias e o trabalho em madeira mostram uma fusão de inovação e respeito pelas tradições.</p>

      <p>Estas imagens representam a beleza e a diversidade do artesanato maranhense, oferecendo uma visão das diferentes formas de expressão artística que embelezam o estado e fazem parte do seu patrimônio cultural.</p>

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
