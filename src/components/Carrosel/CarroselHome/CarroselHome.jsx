// Importa o React para o componente.
import React from 'react';

// Importa o componente Carousel da biblioteca 'react-responsive-carousel'.
// Certifique-se de instalar a biblioteca com 'npm install react-responsive-carousel'.
import { Carousel } from 'react-responsive-carousel';

// Importa o CSS necessário para o carrossel da biblioteca 'react-responsive-carousel'.
// Certifique-se de que o CSS está instalado corretamente junto com a biblioteca.
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importa as imagens para o carrossel a partir da pasta de assets.
import CarroselArmarioToys from '../../../assets/img/CarroselArmarioToys.jpg';
import CarroselCafezinho from '../../../assets/img/CarroselCafezinho.jpg';
import CarroselTecEdu from '../../../assets/img/CarroselTecEdu.jpg';

// Define o componente funcional CarroselHome.
function CarroselHome() {
    return (
        // Container para o carrossel
        <div className="carousel-container">
            {/* Componente Carousel do 'react-responsive-carousel' com várias propriedades para configurar o comportamento do carrossel */}
            <Carousel
                showArrows={true} // Exibe setas de navegação
                autoPlay={true} // Ativa a reprodução automática
                infiniteLoop={true} // Habilita o loop infinito
                showThumbs={false} // Desativa a exibição de miniaturas
                showStatus={false} // Desativa a exibição do status (índice)
                interval={3000} // Intervalo entre transições (em milissegundos)
                transitionTime={1000} // Tempo de transição entre imagens (em milissegundos)
                dynamicHeight={true} // Ajusta a altura do carrossel dinamicamente com base na altura da imagem
                emulateTouch={true} // Habilita a simulação de toque (útil para dispositivos móveis)
            >
                {/* Imagem 1 */}
                <div>
                    <img src={CarroselArmarioToys} alt="Armário Toys" />
                </div>
                {/* Imagem 2 */}
                <div>
                    <img src={CarroselCafezinho} alt="Cafezinho" />
                </div>
                {/* Imagem 3 */}
                <div>
                    <img src={CarroselTecEdu} alt="Tecnologia e Educação" />
                </div>
            </Carousel>
        </div>
    );
}

// Exporta o componente CarroselHome para uso em outras partes da aplicação.
export default CarroselHome;
