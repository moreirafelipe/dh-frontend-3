import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Esta é minha primeira aplicação.</h2>
        </p>
      </header>
      <main>
        <h2>Meus hobbies:</h2>
        <ul>
          <li>Ler livros;</li>
          <li>Assistir filmes e séries;</li>
          <li>Jogar games.</li>
        </ul>
      </main>
      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
