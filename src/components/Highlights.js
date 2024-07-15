import React from 'react';
import './Highlights.css';

const Highlights = () => {
  return (
    <section className="highlights">
      <h2>Destaques</h2>
      <div className="highlight-item">
        <img src="/assets/images/img1.jpg" alt="Destaque 1" />
        <div className="highlight-content">
          <h3>Evento Cultural</h3>
          <p>Descrição do evento cultural importante.</p>
        </div>
      </div>
      <div className="highlight-item">
        <img src="/assets/images/img1.jpg" alt="Destaque 2" />
        <div className="highlight-content">
          <h3>Produto Local</h3>
          <p>Descrição de um produto local popular.</p>
        </div>
      </div>
      {/* Adicione mais itens conforme necessário */}
    </section>
  );
};

export default Highlights;
