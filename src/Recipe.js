import React from 'react';
import Ingredients from './Ingredients';
const Recipe = ({ label, calories, image, ingredientLines, isErrorSearch }) => {
  if (isErrorSearch) return null;
  return (
    <div className='Recipe'>
      <h2 className='recipe-title'>{label}</h2>
      <h4>Calories : {Math.ceil(calories / 10) * 10}cal</h4>
      <div>
        <h3>Ingredients</h3>
        <Ingredients ingredients={ingredientLines} />
      </div>
      <img src={image} alt='' />
    </div>
  );
};

export default Recipe;
