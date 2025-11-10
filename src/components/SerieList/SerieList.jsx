import { Link } from "react-router-dom";
import "./serieList.css";

export default function SerieList({id, img, titulo, numTemporadas, dataLanc, diretor, produtora, categoria, dataAssistiu, onDelete}) {
    const urlImg = img
    return(
            <div className="serieList">
                <div><img src={urlImg} alt="Foto da serie" className="ft" /></div>
                <div className="items-serie">
                    <h2>Série: {titulo}</h2>
                    <h3>Número de temporadas: {numTemporadas}</h3>
                    <p>Data de lançamento: {dataLanc}</p>
                    <p>Diretor: {diretor}</p>
                    <p>Produtora: {produtora}</p>
                    <p>Categoria: {categoria}</p>
                    <p>Data do último episódio assistido: {dataAssistiu}</p>
                </div>
                <div className="btn">
                    <Link to={`/serie-edit/${id}`}><button className="edit">Editar</button></Link>
                    <button className="delete" onClick={() => onDelete(id)}>Excluir</button>
                </div>
        </div> 
    )
}