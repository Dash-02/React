import React from 'react';
import './scss/app.scss';

import Header from './components/Header.jsx';
import Sort from './components/Sort.jsx';
import Categories from './components/Categories.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';

function App() {
  return (
    <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
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
