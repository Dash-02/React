import React from 'react';
import './scss/app.scss';

import Header from './components/Header.jsx';
import Sort from './components/Sort.jsx';
import Categories from './components/Categories.jsx';
import PizzaBlock from './components/PizzaBlock/PizzaBlock.jsx';
import SkeletonLoad from './components/PizzaBlock/Skeleton.jsx';

function App() {
  
  let [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    
    fetch('https://65d118f5ab7beba3d5e4176b.mockapi.io/items')
      .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setItems(arr)
      setLoading(false);
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
            loading ? [...new Array(6)].map((_, id) => <SkeletonLoad key={id}/>)
             : items.map((element) => <PizzaBlock key={element.id} {...element}/>)
          }
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
