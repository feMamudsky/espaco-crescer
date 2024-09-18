import './ContatoText.css';
import FotoGenerica from '../../../assets/img/images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContatoText() {
    return(
            <div className='mae-contato-text'>
                <div className='container-geral-contato'>
                    <div className='text-corpo-contato'>
                        <h1 className='contato-h1-corpo'>
                            Contato - Onde nos achar?
                        </h1>{/* contato-h1-corpo */}
                        <img src={FotoGenerica} className='foto-mateus-sorridente' alt="Foto Mateus Sorridente"></img>
                        <p className='contato-p1-corpo'>
                        O Espaço Crescer está localizado na R. Aprígio de Araújo, 864, Sala 705, no Centro de Sertãozinho/SP, CEP 14170-480. 
                        O local é de fácil acesso, situado em uma área central da cidade, oferecendo um ambiente tranquilo e profissional para 
                        atendimentos terapêuticos.                        
                        </p>{/* contato-p1-corpo */}
                        <div className='redes-sociais'>
                            <h1 className='redes-sociais-h1'>
                                Nossas redes sociais
                            </h1>{/* redes-sociais-h1 */}
                            
                            <div className='botoes-redes-sociais'>
                                <a href='https://www.instagram.com/espacocrescerstz/' target='_blank' rel='noopener noreferrer' className='botao-rede-social botao-instagram'>
                                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                                </a>
                                <a href='https://www.facebook.com/Crescerstz/' target='_blank' rel='noopener noreferrer' className='botao-rede-social botao-facebook'>
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                                <a href='https://wa.me/+551630429505' target='_blank' rel='noopener noreferrer' className='botao-rede-social botao-whatsapp'>
                                    <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                                </a>
                            </div>
                        </div>{/* redes-sociais */}
                    </div>{/* text-corpo-contato */}
                </div>{/* container-geral-contato */}
            </div>
    )
}

export default ContatoText;
