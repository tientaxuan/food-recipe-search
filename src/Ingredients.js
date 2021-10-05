import React from 'react';

const Ingreidents = ({ ingredients }) => (
  <ul>
    {ingredients.map((ingredient, id) => (
      <li key={id}>{ingredient}</li>
    ))}
  </ul>
);
export default Ingreidents;
