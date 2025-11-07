import { createContext, useState } from "react";

export const KattintasContext = createContext("");

export const KattintasProvider = ({ children }) => {
  // Állapotok
  const [lista, setLista] = useState(["", "", "", "", "", "", "", "", ""]);
  const [allapot, setAllapot] = useState("x");
  const [lepes, setLepes] = useState(1);

  // Kattintás logika
  function katt(index) {
    const ujLista = [...lista];
    if (ujLista[index] === "") { // csak üres helyre lehet kattintani
      ujLista[index] = allapot;
      setLista(ujLista);

      // játékos váltás
      setAllapot(allapot === "x" ? "o" : "x");

      // lépés növelése
      setLepes(lepes + 1);
    }
  }

  // A Provider visszaadja az adatokat
  return (
    <KattintasContext.Provider value={{ lista, allapot, lepes, katt }}>
      {children}
    </KattintasContext.Provider>
  );
};
