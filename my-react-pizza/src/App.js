import React from 'react';
import './scss/app.scss';

import Header from './components/Header.jsx';
import Sort from './components/Sort.jsx';
import Categories from './components/Categories.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';

function App() {
  
  let [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://65d118f5ab7beba3d5e4176b.mockapi.io/items')
      .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setItems(arr)
    })
  }, []);

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
            items.length !== 0?  items.map((element) => ( 
              <PizzaBlock key={element.id} {...element}/>
            )):<div>загрузка данных</div>
          }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
