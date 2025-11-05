import "./serieForm.css"

export default function SerieForm() {
    return(
        <div className="formulario">
            <h2>Formulário de Cadastro de Séries</h2>
            <form action="post">
            <label htmlFor="titulo">Título:
            <input type="text" id="titulo" name="titulo" />
            </label>
            <br/> 

            <label htmlFor="numTemporadas">Número de temporadas:
            <input type="number" id="numTemporadas" name="numTemporadas" />
            </label>
            <br />
            <label htmlFor="dataLanc">Data de lançamento:
            <input type="date" id="dataLanc" name="dataLanc" />
            </label>
            <br />
            <label htmlFor="diretor">Diretor:
            <input type="text" id="diretor" name="diretor" />
            </label>
            <br />
            <label htmlFor="produtora">Produtora:
            <input type="text" id="produtora" name="produtora" />
            </label>
            <br />
            <label htmlFor="categoria">Categoria:
            <select id="categoria" name="categoria">
                <option value="terror">Terror</option>
                <option value="comedia">Comédia</option>
                <option value="romance">Romance</option>
                <option value="ficcao-cientifica">Ficcção científica</option>
                <option value="drama">Drama</option>
                <option value="acao">Ação</option>
                <option value="fantasia">Fantasia</option>
                <option value="super-herois">Super-heróis</option>
                <option value="misterio">Mistério</option>
                <option value="drama-historico">Drama histórico</option>
            </select>
            </label>
            <br />
            <label htmlFor="dataLanc">Data que assistiu:
            <input type="date" id="dataAssisiu" name="dataAssisiu" />
            </label>
            <br />
            <button type="submit">Cadastrar</button>
        </form>
        </div>
        
    )
}