import Navegacao from "../../components/Navegacao/Navegacao"; //Importa o NavBar dos components
import ContatoText from '../../components/Texts/ContatoText/ContatoText';
import Rodape from '../../components/Rodape/Rodape';
import './Contato.css'; //Importa o css do contato


function Contato() {
    return(
        <>
            <Navegacao />        
            <ContatoText />
            <Rodape />
        </>
    )
}

export default Contato;