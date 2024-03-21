import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Inicio from './inicio';
import logo from './aston2.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
         
          <h1>Aston Martin</h1>
         
          <p className="Bold-text">No horizonte brilhante da estrada da vida, reside o desejo ardente de sentir a emoção única de dirigir um Aston Martin.</p>
          <p className="Bold-text">Aston Martin: Potência inigualável.</p>

          <Link to="/inicio" className="Register-button">Registrar-se</Link>

          <Route path="/inicio" component={Inicio} />
        </header>
      </div>
    </Router>
  );
}

export default App;
