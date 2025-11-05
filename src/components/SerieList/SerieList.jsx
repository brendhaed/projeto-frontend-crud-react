import "./serieList.css";

export default function SerieList({titulo, numTemporadas, dataLanc, diretor, produtora, categoria, dataAssistiu}) {
    
    return(
            <div className="serieList">
                <h2>Titulo: {titulo}</h2>
                <h3>Número de temporadas: {numTemporadas}</h3>
                <p>Data de lançamento: {dataLanc}</p>
                <p>Diretor: {diretor}</p>
                <p>Produtora: {produtora}</p>
                <p>Categoria: {categoria}</p>
                <p>Data do último episódio assistido: {dataAssistiu}</p>
                <div className="btn">
                    <button className="edit">Editar</button>
                    <button className="delete">Excluir</button>
                </div>
        </div> 
    )
}