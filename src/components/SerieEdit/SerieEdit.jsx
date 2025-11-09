import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SerieEdit.css';

export function SerieEdit({ series, onEdit }) {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null); 

    useEffect(() => {
        const serieOriginal = series.find(s => s.id === Number(id)); 
        
        if (serieOriginal) {
            setFormData(serieOriginal); 
        } else {
            
            navigate('/series'); 
        }
    }, [id, series, navigate]);
    
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData) {
            onEdit(formData); 
            navigate('/series'); 
        }
    };
    
    if (formData === null) {
        return <div>Carregando dados da série...</div>;
    }

    return (
        <div className="serie-edit-container">
            <h2>Editar Série: {formData.titulo}</h2>
            
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input 
                        type="text" 
                        id="titulo" 
                        name="titulo" 
                        value={formData.titulo || ''} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                
                
                <div>
                    <label htmlFor="numTemporadas">Nº de Temporadas:</label>
                    <input 
                        type="number" 
                        id="numTemporadas" 
                        name="numTemporadas" 
                        value={formData.numTemporadas || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>
                
              
                <div>
                    <label htmlFor="dataLanc">Data Lançamento:</label>
                    <input 
                        type="text" 
                        id="dataLanc" 
                        name="dataLanc" 
                        value={formData.dataLanc || ''} 
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
                        value={formData.diretor || ''} 
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
                        value={formData.produtora || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>
                
                
                <div>
                    <label htmlFor="categoria">Categoria:</label>
                    <input 
                        type="text" 
                        id="categoria" 
                        name="categoria" 
                        value={formData.categoria || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>
                
               
                <div>
                    <label htmlFor="dataAssistiu">Data Que Assisitiu:</label>
                    <input 
                        type="text" 
                        id="dataAssistiu" 
                        name="dataAssistiu" 
                        value={formData.dataAssistiu || ''} 
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Botão de Submissão */}
                <button type="submit">
                    Salvar Alterações
                </button>
            </form>
        </div>
    );
}