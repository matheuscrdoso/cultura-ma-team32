import React from 'react';
import '../assets/styles/Recipe.css';

const Recipe = ({ title, ingredients, instructions, image }) => (
    <div className="recipe">
      <h4>{title}</h4>
      <img src={image} alt={title} className="recipe-image" />
      <h5>Ingredientes:</h5>
      <p>{ingredients}</p>
      <h5>Receita:</h5>
      <p>{instructions}</p>
    </div>
  );
export default Recipe;
