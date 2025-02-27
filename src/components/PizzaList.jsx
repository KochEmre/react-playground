import React from 'react';
import pizzas from '../data/pizzas';
import Pizza from './Pizza';

const PizzaList = () => {
  return (
    <div className="pizza-list">
      {pizzas.map(pizza => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;
