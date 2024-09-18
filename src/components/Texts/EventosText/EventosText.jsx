import './EventosText.css';
import 
FotoManutencao from '../../../assets/img/manutencao.jpg'

function EventosText() {
    return (
        <div className='mae-contato-text'>
        <div className='container-geral-contato'>
            <div className='text-corpo-contato'>
                <h1 className='contato-h1-corpo'>
                    Nada aqui por enquanto!
                </h1>{/* contato-h1-corpo */}
                <img src={FotoManutencao} className='foto-mateus-sorridente' alt="Foto Mateus Sorridente"></img>
                <p className='contato-p1-corpo'>
                    Esta áreas está destinada a futuro eventos que aconteceram em parceria com o espaço crescer, serão publicados aqui com
                    data, local e hora.
                </p>{/* contato-p1-corpo */}

            </div>{/* text-corpo-contato */}
        </div>{/* container-geral-contato */}
    </div>
    )
}

export default EventosText;