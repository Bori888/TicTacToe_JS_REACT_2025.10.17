import './App.css';
import Jatekter from './components/Jatekter';
import Footer from './components/Footer';
import { useState } from "react";
import LepesKiirato from './components/LepesKiirato';

function App() {

  //const lista = ["o", "x", "o", "x", "o", "x", "o", "x", "o"]
  //allapot kezelés rect ban useState hook,steakkekel kezeljuk
  const [lista, setLista] = useState(["o", "x", "o", "x", "o", "x", "o", "x", "o"])
  //useState egy 2 elemu lista eso érték a változo ,
  // 2  a valtozot beálito fuggvény , 
  // a változo értéketet csak a beállito fugvényen bekereszul változtatjuk

  const [allapot, setAllapot] = useState("x")
  const [lepes, setLepes] = useState(1)


  function katt(index) {
    console.log(index);
    //statek változtatáása
    //1. el mentem az aktuális állapotot
    //2. modositom az element változot
    //3. frissitem a steat uj értéket
    //--------------------------------------------------------------  lista
    const sl = [...lista]
    //--------------------------------------------------------------állapot
    sl[index] = allapot
    let sa = allapot
    if (allapot === "x") {
      setAllapot("o")

    } else {
      setAllapot("x")
    }
    setLista([...sl])
    console.log(lista);
    //-------------------------------------------------------------lépés
    let sv = lepes
    sv++
    setLepes(sv)

  }
  return (
    <div className="App">
      <header className="header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <article className="article">
        <Jatekter lista={lista} katt={katt} />
      </article>
      <aside className="aside">
        <LepesKiirato lepes ={lepes} allapot={allapot}/>
      </aside>
      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
