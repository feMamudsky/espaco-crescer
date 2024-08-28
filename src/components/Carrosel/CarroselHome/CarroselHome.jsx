import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importando o CSS do carrossel
import CarroselArmarioToys from '../../../assets/img/CarroselArmarioToys.jpg';
import CarroselCafezinho from '../../../assets/img/CarroselCafezinho.jpg';
import CarroselTecEdu from '../../../assets/img/CarroselTecEdu.jpg';

function CarroselHome() {
    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                transitionTime={1000}
                dynamicHeight={true}
                emulateTouch={true}
            >
                <div>
                    <img src={CarroselArmarioToys} />
                </div>
                <div>
                    <img src={CarroselCafezinho} />
                </div>
                <div>
                    <img src={CarroselTecEdu} />
                </div>
            </Carousel>
        </div>
    );
}

export default CarroselHome;
