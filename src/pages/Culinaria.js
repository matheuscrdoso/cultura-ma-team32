import React from 'react';
import Comments from '../components/Comments';
import Recipe from '../components/Recipe';


// Importando as Imagens
import arrozCuxaImg from '../assets/images/arrozCuxa.jpg';
import cuxaPeixeImg from '../assets/images/cuxaPeixe.jpg';
import tutuFeijaoImg from '../assets/images/tutuFeijao.jpg';
import peixeTucupiImg from '../assets/images/peixeTucupi.jpg';
import caranguejadaImg from '../assets/images/caranguejada.jpg';
import vatapaMaranhenseImg from '../assets/images/vatapaMaranhense.jpg';
import feijoadaMaranhenseImg from '../assets/images/feijoadaMaranhense.jpg';
import boloTapiocaImg from '../assets/images/boloTapioca.jpg';

const Culinaria = () => {
  return (
    <section id="culinaria">
      <h2>Culinária Maranhense</h2>
      <p>A culinária do Maranhão é rica e variada, com pratos típicos que refletem a diversidade cultural do estado. Entre os pratos mais conhecidos estão o arroz de cuxá, a torta de camarão e o sururu. Aqui estão algumas imagens dos pratos típicos:</p>

      <h3>História da culinária Maranhense</h3>
      <p>A culinária maranhense é um verdadeiro tesouro gastronômico que reflete a riqueza cultural e histórica desse estado do nordeste brasileiro...</p>
      <br/>
      <h3>Receitas Típicas</h3>
      <div className="recipe-container">
      <Recipe
        title="Arroz de Cuxá"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Arroz, camarão seco, gergelim, vinagreira (azedinha), alho, cebola, azeite de dendê."
        descricao="1. Refogue o alho e a cebola no azeite de dendê. 2. Adicione os camarões secos e refogue até ficarem dourados. 3. Acrescente a vinagreira picada e refogue por alguns minutos. 4. Cozinhe o arroz normalmente. 5. Misture o arroz cozido com o refogado de vinagreira e camarão. Sirva quente."
        image={arrozCuxaImg}
      />
      <Recipe
        title="Cuxá de Peixe" n
        ame = "Ingredientes"
        desc = "Receita"
        itens="Peixe (como tambaqui ou robalo), vinagreira, cebola, alho, pimentão, tomate, coentro, azeite de dendê."
        descricao="1. Refogue o alho, cebola e pimentão no azeite de dendê. 2. Adicione o tomate picado e deixe refogar até formar um molho. 3. Acrescente o peixe cortado em postas e deixe cozinhar por alguns minutos. 4. Adicione a vinagreira picada e cozinhe até que o peixe esteja totalmente cozido. 5. Finalize com coentro picado e sirva acompanhado de arroz branco."
        image={cuxaPeixeImg}
      />
      <Recipe
        title="Tutu de Feijão"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Feijão preto, farinha de mandioca, alho, cebola, bacon ou linguiça calabresa, temperos a gosto."
        descricao = "1. Cozinhe o feijão até ficar macio. 2. Em outra panela, refogue o alho, cebola e bacon (ou linguiça) picados. 3. Acrescente o feijão cozido e um pouco de caldo do próprio feijão. 4. Adicione a farinha de mandioca aos poucos até obter uma consistência cremosa. 5. Tempere a gosto com sal e pimenta. Sirva quente."
        image={tutuFeijaoImg}
      />
      <Recipe
        title="Peixe com Tucupi"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Peixe (como filhote ou pirarucu), tucupi (suco da mandioca brava), jambu, alho, cebola, pimenta-de-cheiro, coentro, sal."
        descricao="1. Tempere o peixe com alho e sal. 2. Em uma panela, refogue alho, cebola e pimenta-de-cheiro. 3. Adicione o peixe e deixe dourar. 4. Acrescente o tucupi e deixe cozinhar até o peixe ficar macio. 5. No final, adicione as folhas de jambu picadas e o coentro. Sirva com arroz branco."
        image={peixeTucupiImg}
      />
      <Recipe
        title="Caranguejada"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Caranguejos, tomate, cebola, alho, pimentão, coentro, azeite de dendê, leite de coco, pimenta dedo-de-moça, sal."
        descricao="1. Refogue alho, cebola e pimentão no azeite de dendê. 2. Adicione os caranguejos limpos e tempere com sal. 3. Acrescente tomate picado e pimenta dedo-de-moça a gosto. 4. Deixe cozinhar por alguns minutos até que os caranguejos estejam cozidos. 5. Finalize com leite de coco e coentro. Sirva quente com arroz branco e farofa."
        image={caranguejadaImg}
      />
      <Recipe
        title="Vatapá Maranhense"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Pão amanhecido, camarão seco, leite de coco, azeite de dendê, castanha de caju, cebola, alho, gengibre, pimenta dedo-de-moça, coentro, sal."
        descricao="1. Hidrate o pão amanhecido no leite de coco. 2. Em uma panela, refogue alho, cebola, gengibre e pimenta dedo-de-moça no azeite de dendê. 3. Adicione o camarão seco e refogue até ficar dourado. 4. Triture as castanhas de caju e adicione à panela. 5. Acrescente o pão hidratado e cozinhe até obter uma consistência cremosa. Sirva com arroz branco."
        image={vatapaMaranhenseImg}
      />
      <Recipe
        title="Feijoada Maranhense"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Feijão preto, carne de porco (como costela, paio, lombo), linguiça calabresa, bacon, alho, cebola, louro, cominho, pimenta-do-reino, coentro, laranja, farinha de mandioca."
        descricao="1. Cozinhe o feijão preto até ficar macio. 2. Em outra panela, refogue alho, cebola, bacon, linguiça e carne de porco. 3. Adicione o feijão cozido à panela da carne. 4. Tempere com louro, cominho, pimenta-do-reino e sal a gosto. 5. Sirva acompanhado de farinha de mandioca, coentro picado e laranja fatiada."
        image={feijoadaMaranhenseImg}
      />

      <Recipe
        title="Bolo de Tapioca"
        name = "Ingredientes"
        desc = "Receita"
        itens = "Tapioca granulada, leite de coco, açúcar, queijo coalho."
        descricao="1. Misture a tapioca granulada com o leite de coco e o leite condensado. 2. Deixe descansar por algumas horas até a tapioca absorver os líquidos. 3. Unte uma forma com óleo e polvilhe com açúcar. 4. Despeje a mistura na forma e polvilhe com coco ralado. 5. Leve ao forno pré-aquecido a 180°C por cerca de 40 minutos ou até dourar. Sirva frio."
        image={boloTapiocaImg}
      />
    </div>
    
      <Comments />
    </section>
  );
};

export default Culinaria
