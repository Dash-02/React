import React from 'react';
import './scss/app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  </div>
  );
}

export default App;
