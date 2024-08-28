import './Home.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import HomeText from '../../components/Texts/HomeText/HomeText';
import CarroselHome from '../../components/Carrosel/CarroselHome/CarroselHome';
import Rodape from '../../components/Rodape/Rodape';

function Home() {
    return(
        <>
            <Navegacao />
            <CarroselHome />
            <HomeText />
            <Rodape />
        </>
    )
}

export default Home;