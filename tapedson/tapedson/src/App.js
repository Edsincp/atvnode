import logo from './aston2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo centralizada */}
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
       
        <h1>Aston Martin</h1>
       
        <p className="Bold-text">No horizonte brilhante da estrada da vida, reside o desejo ardente de sentir a emoção única de dirigir um Aston Martin.</p>
        <p className="Bold-text">Aston Martin: Potência inigualável.</p>

        {/* Botão centralizado */}
        <button className="Register-button">Registrar-se</button>
      </header>
    </div>
  );
}

export default App;
