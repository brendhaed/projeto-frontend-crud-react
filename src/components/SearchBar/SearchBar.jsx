import "./SearchBar.css"
import { useState } from "react";

export default function SearchBar({ allSeries, onSearch }) { 
    const [busca, setBusca] = useState("");
    
    const search = () => {
        if (!allSeries || allSeries.length === 0) {
            onSearch([]); 
            return;
        }

        const termo = busca.toLowerCase().trim();
        
        const seriesFiltradas = allSeries.filter(serie => {
            return serie.titulo.toLowerCase().includes(termo);
        });
        onSearch(seriesFiltradas); 
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

            
        </div>
    )
}