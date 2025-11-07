import './App.css';
import Jatekter from './components/Jatekter';
import Footer from './components/Footer';
import LepesKiirato from './components/LepesKiirato';
import { useContext } from "react";
import { KattintasProvider } from './context/kattintasContext';


function App() {
  const { lista, katt, allapot, lepes } = useContext(KattintasContext);

  return (
    <div className="App">
      <header className="header">
        <h1>Tic-Tac-Toe</h1>
      </header>

      <article className="article">
        <Jatekter lista={lista} katt={katt} />
      </article>

      <aside className="aside">
        <LepesKiirato lepes={lepes} allapot={allapot} />
      </aside>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
