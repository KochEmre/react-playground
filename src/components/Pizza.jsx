import React from 'react';

const Pizza = ({ pizza }) => {
  if (!pizza) {
    return <div>Error: Pizza data is missing</div>;
  }

  return (
    <div className="pizza">
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
    </div>
  );
};

export default Pizza;
