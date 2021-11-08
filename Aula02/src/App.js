import Header from './Components/Header';
import Banner from './Components/Banner';
import Grid from './Components/Grid';
import Footer from './Components/Footer'
import './App.css';

function App() {

  const info = {
    title: 'O Hobbit: A Batalha dos Cinco Exércitos',
    description: 'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza.',
  }

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Banner title={info.title}>
            <p>{info.description}</p>
            <button>Assistir</button>
          </Banner>
        </main>
        <section>
          <Grid />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;