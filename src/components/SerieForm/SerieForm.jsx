import "./serieForm.css" 
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function SerieForm({onAdd}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: '',
        numTemporadas: '', 
        dataLanc: '',
        diretor: '',
        produtora: '',
        categoria: '',
        dataAssistiu: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData); 
        
        setFormData({
            titulo: '',
            numTemporadas: '',
            dataLanc: '',
            diretor: '',
            produtora: '',
            categoria: '',
            dataAssistiu: '',
        });
        
        
        navigate('/series'); 
    };
    return(
        <div className="formulario" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Formulário de Cadastro de Séries</h2>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input 
                        type="text" 
                        id="titulo" 
                        name="titulo" 
                        value={formData.titulo} 
                        onChange={handleChange} 
                        required 
                       
                    />
                </div>

                <div>
                    <label htmlFor="numTemporadas">Número de temporadas:</label>
                    <input 
                        type="number" 
                        id="numTemporadas" 
                        name="numTemporadas" 
                        value={formData.numTemporadas}
                        onChange={handleChange} 
                        required 
                        min="1" 
                        
                    />
                </div>

                <div>
                    <label htmlFor="dataLanc">Data de lançamento:</label>
                    <input 
                        type="date" 
                        id="dataLanc" 
                        name="dataLanc" 
                        value={formData.dataLanc} 
                        onChange={handleChange} 
                        required
                        
                    />
                </div>

                <div>
                    <label htmlFor="diretor">Diretor:</label>
                    <input 
                        type="text" 
                        id="diretor" 
                        name="diretor" 
                        value={formData.diretor} 
                        onChange={handleChange} 
                        required
                        
                    />
                </div>

                <div>
                    <label htmlFor="produtora">Produtora:</label>
                    <input 
                        type="text" 
                        id="produtora" 
                        name="produtora" 
                        value={formData.produtora}
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div>
                    <label htmlFor="categoria">Categoria:</label>
                    <select 
                        id="categoria" 
                        name="categoria" 
                        value={formData.categoria}
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled>-- Selecione a Categoria --</option>
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
                </div>

                <div>
                    <label htmlFor="dataAssistiu">Data que assistiu:</label>
                    <input 
                        type="date" 
                        id="dataAssistiu" 
                        name="dataAssistiu" 
                        value={formData.dataAssistiu}
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
        
    )
}