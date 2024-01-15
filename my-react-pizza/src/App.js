import React from 'react';
import './scss/app.scss';

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
          <PizzaBlock title="Мексиканская" prise={400} />
          <PizzaBlock title="4 сыра" prise={350} />
          <PizzaBlock title="Гавайская" prise={420} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
