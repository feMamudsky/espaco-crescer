import './Home.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import HomeText from '../../components/Texts/homeText';
import CarroselHome from '../../components/Carrosel/CarroselHome/CarroselHome';

function Home() {
    return(
        <>
            <Navegacao />
            <CarroselHome />
            <HomeText />
        </>
    )
}

export default Home;