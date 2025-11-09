import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SerieForm from "./components/SerieForm/SerieForm";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { SerieEdit } from "./components/SerieEdit/SerieEdit";
import SerieList from "./components/SerieList/SerieList";

function App() {
  const [series, setSeries] = useState([
    {
      id: 1,
      titulo: "Breaking Bad",
      numTemporadas: 5,
      dataLanc: "20/01/2008",
      diretor: "Vince Gilligan",
      produtora: "AMC",
      categoria: "Drama / Crime",
      dataAssistiu: "15/09/2013",
    },
    {
      id: 2,
      titulo: "Stranger Things",
      numTemporadas: 4,
      dataLanc: "15/07/2016",
      diretor: "The Duffer Brothers",
      produtora: "Netflix",
      categoria: "Ficção científica / Terror",
      dataAssistiu: "01/11/2022",
    },
    {
      id: 3,
      titulo: "Game of Thrones",
      numTemporadas: 8,
      dataLanc: "17/04/2011",
      diretor: "David Benioff, D. B. Weiss",
      produtora: "HBO",
      categoria: "Fantasia / Drama",
      dataAssistiu: "19/05/2019",
    },
    {
      id: 4,
      titulo: "The Witcher",
      numTemporadas: 3,
      dataLanc: "20/12/2019",
      diretor: "Lauren Schmidt Hissrich",
      produtora: "Netflix",
      categoria: "Fantasia / Ação",
      dataAssistiu: "29/12/2021",
    },
    {
      id: 5,
      titulo: "The Office",
      numTemporadas: 9,
      dataLanc: "24/03/2005",
      diretor: "Greg Daniels",
      produtora: "NBC",
      categoria: "Comédia",
      dataAssistiu: "16/05/2013",
    },
    {
      id: 6,
      titulo: "Peaky Blinders",
      numTemporadas: 6,
      dataLanc: "12/09/2013",
      diretor: "Steven Knight",
      produtora: "BBC",
      categoria: "Drama histórico / Crime",
      dataAssistiu: "10/04/2022",
    },
    {
      id: 7,
      titulo: "Dark",
      numTemporadas: 3,
      dataLanc: "01/12/2017",
      diretor: "Baran bo Odar, Jantje Friese",
      produtora: "Netflix",
      categoria: "Ficção científica / Mistério",
      dataAssistiu: "27/06/2020",
    },
    {
      id: 8,
      titulo: "Friends",
      numTemporadas: 10,
      dataLanc: "22/09/1994",
      diretor: "David Crane, Marta Kauffman",
      produtora: "NBC",
      categoria: "Comédia / Romance",
      dataAssistiu: "20/05/2004",
    },
    {
      id: 9,
      titulo: "The Boys",
      numTemporadas: 4,
      dataLanc: "26/07/2019",
      diretor: "Eric Kripke",
      produtora: "Amazon Studios",
      categoria: "Ação / Satírica / Super-heróis",
      dataAssistiu: "04/03/2022",
    },
  ]);

  const [seriesExibidas, setSeriesExibidas] = useState(series);

  useEffect(() => {
    setSeriesExibidas(series);
  }, [series]);

  // remover series
  const removerSerie = (id) => {
    setSeries(series.filter((serie) => serie.id !== id));
  };
  
  // buscar series
  const handleBusca = (seriesFiltradas) => {
    setSeriesExibidas(seriesFiltradas);
  };

  const [serieEdit, setSerieEdit] = useState(null);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/formulario" element={<SerieForm />} />
        <Route
          path="/serie-edit/:id"
          element={<SerieEdit series={series} setSeries={setSeries} />}
        />

        <Route
          path="/series"
          element={
            <>
              <SearchBar allSeries={series} onSearch={handleBusca} />

              {seriesExibidas.length > 0 ? (
                seriesExibidas.map((serie) => (
                  <SerieList
                    key={serie.id}
                    id={serie.id}
                    titulo={serie.titulo}
                    numTemporadas={serie.numTemporadas}
                    dataLanc={serie.dataLanc}
                    diretor={serie.diretor}
                    produtora={serie.produtora}
                    categoria={serie.categoria}
                    dataAssistiu={serie.dataAssistiu}
                    onDelete={removerSerie}
                    onEdit={() => setSerieEdit(serie)}
                  />
                ))
              ) : (
                <p style={{ padding: "20px" }}>Nenhuma série encontrada.</p>
              )}

              <div style={{ padding: "20px" }}>
                <Link to="/formulario">
                  <button>Cadastrar nova série</button>
                </Link>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
