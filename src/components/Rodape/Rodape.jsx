// Importa o componente Footer da biblioteca flowbite-react.
// Certifique-se de que a biblioteca esteja instalada com 'npm i flowbite-react'.
import { Footer } from "flowbite-react";

// Importa o arquivo de estilo CSS personalizado para o rodapé.
import './Rodape.css';

// Define o componente funcional Rodape.
function Rodape() {
  return (
    // A div maeRodape é um contêiner principal para o rodapé, possivelmente usado para aplicar estilos gerais.
    <div className="maeRodape">
      
      {/* O componente Footer da flowbite-react é usado como contêiner para o conteúdo do rodapé. */}
      <Footer container>
        
        {/* O componente Footer.Copyright exibe informações de direitos autorais, 
        com um link (href="#") e o nome "femamudsky" para o proprietário, além do ano 2024. */}
        <Footer.Copyright 
          href="#" 
          by={<a href="https://www.linkedin.com/in/felipe-mamud-353146312/" target="_blank" rel="noopener noreferrer">feMamudsky</a>} 
          year={2024} 
        />
        {/* O componente Footer.LinkGroup agrupa uma série de links relacionados, como política de privacidade, 
        informações de licenciamento e contato, que são estilizados com a classe FooterText. */}
        <Footer.LinkGroup>
          <Footer.Link className="FooterText" href="/Espaco">Sobre</Footer.Link>
          <Footer.Link className="FooterText" href="/Eventos">Eventos</Footer.Link>
          <Footer.Link className="FooterText" href="/Espaco">Atendimentos</Footer.Link>
          <Footer.Link className="FooterText" href="/Contato">Contato</Footer.Link>
        </Footer.LinkGroup>

      </Footer>
    </div>
  );
}

// Exporta o componente Rodape para que ele possa ser usado em outras partes da aplicação.
export default Rodape;
