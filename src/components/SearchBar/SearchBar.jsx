import SerieList from "../SerieList/SerieList";
import "./SearchBar.css"
import { useState } from "react";

export default function SearchBar() {
    const [busca, setBusca] = useState("");
    const [resultado, setResultado] = useState(null);

    const search = () => {
        // console.log("Buscando série:", busca);
        return(
           setResultado(busca)
        )
    }
    return(
        <div className="container-search">
        <div className="search-bar">
        <input
        type="text"
        placeholder="Buscar série..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={search}>Buscar</button>
    </div>
    <div className="result">
        {resultado && (
        <SerieList/>
      )}
    </div>
    </div>
    )
}