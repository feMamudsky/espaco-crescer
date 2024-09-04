import React, { useState, useEffect } from 'react'; // Importa React e hooks necessários
import { useSpring, animated } from '@react-spring/web'; // Importa hooks de animação. Instale com:
                                                // npm install @react-spring/web
import logo from '../../assets/img/crescer-logo.png'; // Importa a imagem do logo
import './Navegacao.css'; // Importa o CSS personalizado para a navegação

function Navegacao() {
  // Estado para determinar se a página foi rolada para baixo
  const [scrolled, setScrolled] = useState(false);
  // Estado para controlar se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // Estado para verificar se a tela é grande ou pequena
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  // Função para atualizar o estado 'scrolled' baseado na posição de rolagem
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50); // Marca como scrolled se a rolagem for maior que 50px
  };

  // Função para atualizar o estado 'isLargeScreen' quando a janela é redimensionada
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
    if (window.innerWidth > 768) {
      setIsOpen(false); // Fecha o menu em telas grandes
    }
  };

  // Hook para adicionar e remover os ouvintes de eventos de scroll e resize
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Remove os ouvintes de eventos ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Função para alternar o estado do menu (abrir ou fechar)
  const toggleMenu = () => setIsOpen(!isOpen);

  // Classe CSS para a navbar, adicionando a classe 'scrolled' se o estado 'scrolled' for verdadeiro
  const navbarClasses = ['navbar', scrolled && 'scrolled'].filter(Boolean).join(' ');

  // Animação para o menu hambúrguer em telas pequenas usando react-spring
  const menuAnimation = useSpring({
    transform: isOpen ? 'translateY(0px)' : 'translateY(-100%)', // Controla a posição vertical do menu
    opacity: isOpen ? 1 : 0, // Controla a opacidade do menu
    display: isOpen ? 'flex' : 'none', // Controla a exibição do menu
    config: { tension: 200, friction: 20 }, // Configuração da física da animação
  });

  return (
    <nav className={navbarClasses}>
      {/* Contêiner principal da navegação */}
      <div className="container">
        {/* Div para o logo da navegação */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* Div para o botão de menu hambúrguer */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isLargeScreen ? (
          // Renderiza links de navegação sem animação em telas grandes
          <ul className="nav-links">
            <li><a href="./ ">Início</a></li>
            <li><a href="./Espaco ">O Espaço</a></li>
            <li><a href="./Psicopedagogia">Psicopedagogia</a></li>
            <li><a href="./Psicanalise">Psicanalise</a></li>
            <li><a href="./Psicologia">Psicologia</a></li>
            <li><a href="./Contato">Contato</a></li>
            <li><a href="./Eventos">Eventos</a></li>
          </ul>
        ) : (
          // Renderiza links de navegação com animação em telas pequenas
          <animated.ul className="nav-links" style={menuAnimation}>
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
