import Navegacao from '../../components/Navegacao/Navegacao';
import EspacoText from '../../components/Texts/EspacoText/EspacoText';
import Rodape from '../../components/Rodape/Rodape';
import './Espaco.css'; // Importa o css 

function Espaco() {
    return(
        <>
            <Navegacao />
            <EspacoText />
            <Rodape />
        </>
    )
}

export default Espaco;