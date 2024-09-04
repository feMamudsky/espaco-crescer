import React from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';
import './EspacoText.css'; // Importa o arquivo de estilos para o componente
import imgGenerica from '../../../assets/img/images.png';

function EspacoText() {
    // Hook para verificar se a imagem está na viewport
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    const [ref4, inView4] = useInView({ triggerOnce: true });

    // Animações para as imagens
    const animationProps1 = useSpring({
        transform: inView1 ? 'translateX(0)' : 'translateX(100%)',
        opacity: inView1 ? 1 : 0,
        config: { tension: 200, friction: 20 }
    });

    const animationProps2 = useSpring({
        transform: inView2 ? 'translateX(0)' : 'translateX(-100%)',
        opacity: inView2 ? 1 : 0,
        config: { tension: 200, friction: 20 }
    });

    const animationProps3 = useSpring({
        transform: inView3 ? 'translateX(0)' : 'translateX(100%)',
        opacity: inView3 ? 1 : 0,
        config: { tension: 200, friction: 20 }
    });

    const animationProps4 = useSpring({
        transform: inView4 ? 'translateX(0)' : 'translateX(-100%)',
        opacity: inView4 ? 1 : 0,
        config: { tension: 200, friction: 20 }
    });

    return (
        <div className='maeEspacoText'>
            <div className='container-EspacoText'>
                <div className='header-EspacoText'>
                    <h1 className='title-EspacoText'>
                        Espaço Crescer: Um Ambiente Aconchegante e Inspirador
                    </h1>
                </div>

                <div className='paragraph-EspacoText'>
                    <p>
                        Localizado em um prédio moderno em Sertãozinho/SP, o Espaço Crescer foi cuidadosamente projetado para oferecer 
                        um ambiente ideal para o crescimento pessoal e emocional. Desde sua inauguração em outubro de 2020, o Crescer 
                        tem se destacado por seu compromisso em proporcionar um espaço que favorece a reflexão, a compreensão e o 
                        desenvolvimento dos seus clientes.
                    </p>
                    <animated.div className='image-container1' style={animationProps1} ref={ref1}>
                        <img src={imgGenerica} alt='Ambiente do Espaço Crescer' />
                    </animated.div>
                    <p>
                        Ao entrar no Espaço Crescer, você é recebido por um ambiente acolhedor e confortável, onde a atmosfera é 
                        cuidadosamente controlada para garantir seu bem-estar. Equipado com ar condicionado, o local mantém uma 
                        temperatura agradável e propícia para a concentração e relaxamento durante as sessões.
                    </p>
                    <animated.div className='image-container2' style={animationProps2} ref={ref2}>
                        <img src={imgGenerica} alt='Ambiente Aconchegante' />
                    </animated.div>
                    <p>
                        O espaço é equipado com materiais qualificados para psicopedagogia, incluindo uma variedade de brinquedos 
                        didáticos e recursos tecnológicos que enriquecem o processo de ensino e aprendizagem. Estes materiais são 
                        utilizados para oferecer uma abordagem personalizada e eficaz, ajudando a tornar o processo terapêutico mais 
                        interativo e envolvente.
                    </p>
                    <animated.div className='image-container3' style={animationProps3} ref={ref3}>
                        <img src={imgGenerica} alt='Materiais de Psicopedagogia' />
                    </animated.div>
                    <p>
                        Para a psicanálise, o Espaço Crescer dispõe de uma área especialmente projetada para criar um ambiente íntimo 
                        e tranquilo. Este espaço é ideal para sessões de terapia, proporcionando um local seguro e confortável para a 
                        exploração profunda de questões emocionais e psíquicas.
                    </p>
                    <animated.div className='image-container4' style={animationProps4} ref={ref4}>
                        <img src={imgGenerica} alt='Área de Psicanálise' />
                    </animated.div>
                    <p>
                        Cada detalhe do Espaço Crescer foi pensado para oferecer um serviço de alta qualidade, com uma equipe de 
                        profissionais experientes e dedicados, prontos para apoiar você em sua jornada de desenvolvimento pessoal. 
                        Se você procura um local que combine conforto, inovação e um ambiente acolhedor, o Espaço Crescer é o lugar 
                        ideal para iniciar ou continuar seu processo de crescimento emocional e cognitivo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EspacoText;
