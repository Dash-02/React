import React from 'react';
import './scss/app.scss';
import pizza from './assets/pizza.json';

import Header from './components/Header.jsx';
import Sort from './components/Sort.jsx';
import Categories from './components/Categories.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';

function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            pizza.map((element) => ( 
              <PizzaBlock title={element.title} 
              prise={element.prise} 
              imageURL={element.imageUrl} 
              size={element.sizes}/>
            ))
          }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
