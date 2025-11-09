import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSeriesList from "../../hooks/useSeriesList";


export function SerieEdit(series,setSeries) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);
    const [getSerie, updateSerie] = useSeriesList();
    const [serie, setSerie] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
          if (!isDataLoaded) {
            const serieData = await getSerie(String(id));
            setSerie(serieData);
            setIsDataLoaded(true);
          }
        } catch (error) {
          console.log('Error fetching serie:', error);
        }
      };
    
      fetchData();
    }, [isDataLoaded, getSerie, id]);

    return(
      <form onSubmit={salvar}>
        <h1>Editando: {serie.titulo}</h1>

      <input
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
      />

      <input
        name="numTemporadas"
        value={form.numTemporadas}
        onChange={handleChange}
      />

      <button type="submit">Salvar</button>

      </form>
    )
}