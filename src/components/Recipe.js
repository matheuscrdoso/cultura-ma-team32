import React from 'react';
import '../assets/styles/Recipe.css';

const Recipe = ({ title, name , desc, itens, descricao, image }) => (
    <div className="recipe">
      <h4>{title}</h4>
      <img src={image} alt={title} className="recipe-image" />
      <h5>{name}</h5>
      <p>{itens}</p>
      <h5>{desc}</h5>
      <p>{descricao}</p>
    </div>
  );
export default Recipe;
