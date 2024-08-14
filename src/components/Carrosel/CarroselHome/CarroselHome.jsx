import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importando o CSS do carrossel

function CarroselHome() {
    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={1000}
                dynamicHeight={true}
                emulateTouch={true}
            >
                <div>
                    <img src="https://via.placeholder.com/800x400.png?text=Slide+1" alt="Slide 1" />
                    <p className="legend">Texto do Slide 1</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400.png?text=Slide+2" alt="Slide 2" />
                    <p className="legend">Texto do Slide 2</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x400.png?text=Slide+3" alt="Slide 3" />
                    <p className="legend">Texto do Slide 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default CarroselHome;
