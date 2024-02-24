import React from 'react';
import './scss/app.scss';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
      {/* <Home/> */}
      <NotFound/>
      </div>
    </div>
  </div>
  );
}

export default App;
