import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import CardPage from './pages/CardPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/card" component={CardPage} />
        <Route path="/list" component={ListPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
