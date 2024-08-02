import React from 'react';
import Comments from '../components/Comments';
import Recipe from '../components/Recipe';

// Importando as Imagens
import bumbaMeuBoiImg from '../assets/images/bumbaMeuBoi.jpg';
import tamborCrioulaImg from '../assets/images/tamborCrioula.jpg';
import cacuriaImg from '../assets/images/cacuria.jpg';
import carocoImg from '../assets/images/caroco.jpg';
import leleImg from '../assets/images/lele.jpg';
import cocoImg from '../assets/images/coco.jpg';
import tamborMinaImg from '../assets/images/tamborMina.jpg';
import divinoImg from '../assets/images/divino.jpg';
import saoJoaoImg from '../assets/images/saoJoao.jpg';
import carnavalImg from '../assets/images/carnaval.jpg';
import reggaeImg from '../assets/images/reggae.jpg';


const FestasPopulares = () => {
  return (
    <section id="festas">
      <h2>Festas Populares do Maranhão</h2>
      <p>O Maranhão é famoso por suas vibrantes e diversificadas festas populares, que encantam tanto os locais quanto os visitantes. Entre as celebrações mais notáveis estão o icônico Bumba Meu Boi, uma festa que combina música, dança e teatro popular em um espetáculo de cores e emoções; o animado Carnaval, que transforma as ruas em um grande palco de alegria e folia com desfiles e blocos de rua; e as festividades religiosas que incluem procissões e rituais com profunda significação cultural e espiritual.</p>

      <p>Essas festas não são apenas eventos festivos, mas sim uma imersão nas tradições e na identidade cultural maranhense. Elas oferecem uma oportunidade única para experimentar a rica herança cultural do estado, através das danças típicas, das músicas tradicionais e dos trajes coloridos que refletem a diversidade e o entusiasmo do povo local.</p>

      <p>Além disso, cada festa é acompanhada por uma gastronomia especial que complementa a experiência cultural. Pratos típicos são preparados e compartilhados, criando uma celebração que envolve todos os sentidos. Se você deseja entender verdadeiramente o espírito do Maranhão, participar dessas festas é uma imersão indispensável na sua rica tapeçaria cultural.</p>



      <div className="recipe-container">
        <Recipe
          title="Bumba-Meu-Boi"
          name = "Componentes"
          desc = "Descrição"
          itens="Ritual folclórico, danças, músicas, fantasias coloridas."
          descricao="Num espetáculo de cores, danças e ritmos, o Bumba-Meu-Boi é a expressão máxima da cultura popular do Maranhão. Elevado a Patrimônio Imaterial do povo brasileiro, a manifestação tem origens indefinidas, mas elementos culturais africanos e europeus, introduzidos principalmente por meio da religiosidade, são evidentes. Nas comunidades que fazem a brincadeira, as celebrações e o trabalho em torno da festa duram praticamente o ano inteiro."
          image={bumbaMeuBoiImg}
        />

        <Recipe
          title="Tambor de Crioula e outras danças populares"
          name = "Componentes"
          desc = "Descrição"
          itens="Raízes africanas, tambores, dançarinas, vestuário extravagante."
          descricao="Manifestação de raízes africanas que só existe no Maranhão, o Tambor de Crioula foi reconhecido em 2011 como Patrimônio Imaterial Brasileiro. Alegre, sensual e irreverente, pode ser apreciado ao ar livre, nas praças, casas e interior de terreiros por todo o Maranhão, mas sobretudo em São Luís. O som é extraído de tambores tradicionalmente feitos de troncos de árvores e recobertos de couro de cabra. E o vestuário, extravagante, é composto por saias rodadas e coloridas, blusas rendadas, turbantes e uma profusão de colares."
          image={tamborCrioulaImg}
        />

        <Recipe
          title="Dança do Cacuriá"
          name = "Componentes"
          desc = "Descrição"
          itens="Versos improvisados, coro de brincantes, instrumentos tradicionais."
          descricao="Surgiu como a parte profana das festividades do Divino Espírito Santo, uma das tradições juninas maranhenses. A parte vocal é feita por versos improvisados respondidos por um coro de brincantes. A representante mais conhecida do Cacuriá é Dona Teté do Cacuriá, de São Luís."
          image={cacuriaImg}
        />

        <Recipe
          title="Dança do Caroço"
          name = "Componentes"
          desc = "Descrição"
          itens="Raízes indígenas, instrumentos como caixas, cuíca e cabaça."
          descricao="De origem indígena, a Dança do Caroço se concentra na região do Delta do Parnaíba, principalmente no município de Tutóia. Isolados ou formando uma roda ou cordão, os componentes brincam respondendo às toadas improvisadas tiradas pelos cantadores."
          image={carocoImg}
        />

        <Recipe
          title="Dança do Lelê"
          name = "Componentes"
          desc = "Descrição"
          itens="Traços de danças de salão ibéricas, vestuário tradicional."
          descricao="A Dança do Lelê guarda em muitas de suas características os traços das danças de salão trazidas para o Brasil pelos povos ibéricos no século XIX. Trata-se de uma dança de salão profana, mas que costuma ser dançada em honra de determinados santos, ao longo do ano."
          image={leleImg}
        />

        <Recipe
          title="Dança do Coco"
          name = "Componentes"
          desc = "Descrição"
          itens="Influência africana e indígena, celebrada nas fazendas de cana de açúcar."
          descricao="A Dança do Coco tem forte influência africana e indígena, celebrada nas fazendas de cultivo de cana de açúcar e de criação de gado. Atualmente, está presente nas capitais pelo constante resgate e valorização dos folguedos surgidos no interior."
          image={cocoImg}
        />

        <Recipe
          title="Tambor de Mina"
          name = "Componentes"
          desc = "Descrição"
          itens="Culto afro, voduns, rituais discretos, festas populares e religiosas."
          descricao="Tambor de Mina é a denominação mais difundida no Maranhão dentre as religiões de origem afro. O culto que se originou em São Luís e a partir daí difundiu-se para outros estados, tem duas casas principais: a Casa das Minas e a Casa de Nagô."
          image={tamborMinaImg}
        />

        <Recipe
          title="Festa do Divino"
          name = "Componentes"
          desc = "Descrição"
          itens="Devoção ao Divino, homenagens ao Império, cortejos populares."
          descricao="Comemorada durante todo o mês de maio, a Festa do Divino Espírito Santo é uma mistura de devoção ao Divino com homenagens ao Império. O 'imperador' e sua corte visitam as casas dos festeiros, e os cortejos populares percorrem as ruas da cidade entoando cânticos."
          image={divinoImg}
        />

        <Recipe
          title="São João"
          name = "Componentes"
          desc = "Descrição"
          itens="Sons, cores e sabores, manifestações culturais, arraial."
          descricao="No Maranhão, o período junino é marcado por muitas sons, cores e sabores. É o tempo de celebrar todas as ricas manifestações culturais maranhenses, com destaque para o Bumba-Meu-Boi. São Luís se transforma em um enorme arraial."
          image={saoJoaoImg}
        />

        <Recipe
          title="Carnaval"
          name = "Componentes"
          desc = "Descrição"
          itens="Diversas brincadeiras populares, festa de cores, ritmos e diversão."
          descricao="O Carnaval de São Luís é animado por diversas brincadeiras populares, uma verdadeira festa de cores, ritmos e diversão. Na folia, tomam conta das ruas, Fofões, Tribos de Índios, Casinha da Roça, Tambor de Crioula, Blocos Tradicionais e escolas de samba."
          image={carnavalImg}
        />

        <Recipe
          title="Reggae"
          name = "Componentes"
          desc = "Descrição"
          itens="Gênero musical jamaicano, ritmo dançante, batida característica."
          descricao="Gênero musical com origens jamaicanas, o reggae popularizou-se no Maranhão na década de 70. Apresenta um ritmo dançante e suave, com uma batida bem característica e contagiante. Na capital, existem vários clubes de reggae e bares especializados."
          image={reggaeImg}
        />
      </div>

      <Comments />
    </section>
  );
};

export default FestasPopulares;
