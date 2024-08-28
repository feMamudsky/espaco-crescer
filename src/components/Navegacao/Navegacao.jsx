import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from '../../assets/img/crescer-logo.png';
import './Navegacao.css';

function Navegacao() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
    if (window.innerWidth > 768) {
      setIsOpen(false); // Fecha o menu em telas grandes
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClasses = ['navbar', scrolled && 'scrolled'].filter(Boolean).join(' ');

  // Animação para o menu hambúrguer em telas pequenas
  const menuAnimation = useSpring({
    transform: isOpen ? 'translateY(0px)' : 'translateY(-100%)',
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'flex' : 'none',
    config: { tension: 200, friction: 20 },
  });

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isLargeScreen ? (
          <ul className="nav-links">
            {/* Links de navegação sem animação em telas grandes */}
            <li><a href="./ ">Início</a></li>
            <li><a href="./Espaco ">O Espaço</a></li>
            <li><a href="./Psicopedagogia">Psicopedagogia</a></li>
            <li><a href="./Psicanalise">Psicanalise</a></li>
            <li><a href="./Psicologia">Psicologia</a></li>
            <li><a href="./Contato">Contato</a></li>
            <li><a href="./Eventos">Eventos</a></li>
          </ul>
        ) : (
          <animated.ul className="nav-links" style={menuAnimation}>
            {/* Links de navegação com animação em telas pequenas */}
            <li><a href="./ ">Início</a></li>
            <li><a href="./Espaco ">O Espaço</a></li>
            <li><a href="./Psicopedagogia">Psicopedagogia</a></li>
            <li><a href="./Psicanalise">Psicanalise</a></li>
            <li><a href="./Psicologia">Psicologia</a></li>
            <li><a href="./Contato">Contato</a></li>
            <li><a href="./Eventos">Eventos</a></li>
          </animated.ul>
        )}
      </div>
    </nav>
  );
}

export default Navegacao;
