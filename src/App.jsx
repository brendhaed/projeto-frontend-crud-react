import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SerieForm from "./components/SerieForm/SerieForm";
import SerieList from "./components/SerieList/SerieList";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/formulario" element={<SerieForm />} />
        <Route
          path="/series"
          element={
            <>
            <SearchBar />
              <SerieList
                titulo="Breaking Bad"
                numTemporadas={5}
                dataLanc="20/01/2008"
                diretor="Vince Gilligan"
                produtora="AMC"
                categoria="Drama / Crime"
                dataAssistiu="15/09/2013"
              />

              <SerieList
                titulo="Stranger Things"
                numTemporadas={4}
                dataLanc="15/07/2016"
                diretor="The Duffer Brothers"
                produtora="Netflix"
                categoria="Ficção científica / Terror"
                dataAssistiu="01/11/2022"
              />
              <SerieList
                titulo="Game of Thrones"
                numTemporadas={8}
                dataLanc="17/04/2011"
                diretor="David Benioff, D. B. Weiss"
                produtora="HBO"
                categoria="Fantasia / Drama"
                dataAssistiu="19/05/2019"
              />

              <SerieList
                titulo="The Witcher"
                numTemporadas={3}
                dataLanc="20/12/2019"
                diretor="Lauren Schmidt Hissrich"
                produtora="Netflix"
                categoria="Fantasia / Ação"
                dataAssistiu="29/12/2021"
              />

              <SerieList
                titulo="The Office"
                numTemporadas={9}
                dataLanc="24/03/2005"
                diretor="Greg Daniels"
                produtora="NBC"
                categoria="Comédia"
                dataAssistiu="16/05/2013"
              />

              <SerieList
                titulo="Peaky Blinders"
                numTemporadas={6}
                dataLanc="12/09/2013"
                diretor="Steven Knight"
                produtora="BBC"
                categoria="Drama histórico / Crime"
                dataAssistiu="10/04/2022"
              />

              <SerieList
                titulo="Dark"
                numTemporadas={3}
                dataLanc="01/12/2017"
                diretor="Baran bo Odar, Jantje Friese"
                produtora="Netflix"
                categoria="Ficção científica / Mistério"
                dataAssistiu="27/06/2020"
              />

              <SerieList
                titulo="Friends"
                numTemporadas={10}
                dataLanc="22/09/1994"
                diretor="David Crane, Marta Kauffman"
                produtora="NBC"
                categoria="Comédia / Romance"
                dataAssistiu="20/05/2004"
              />

              <SerieList
                titulo="The Boys"
                numTemporadas={4}
                dataLanc="26/07/2019"
                diretor="Eric Kripke"
                produtora="Amazon Studios"
                categoria="Ação / Satírica / Super-heróis"
                dataAssistiu="04/03/2022"
              />
              <div style={{ marginTop: "20px"}}>
                <Link to="/formulario"><button>Cadastrar nova série</button></Link>
              </div>
            </>
          }
        />
      </Routes>
      
    </>
  );
}

export default App;
