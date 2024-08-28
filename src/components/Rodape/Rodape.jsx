import { Footer } from "flowbite-react"; // Instale npm i flowbite-react para rodar o Rodapé
import './Rodape.css'; // Importação de CSS corrigida

function Rodape() {
  return (
    <div className="maeRodape">
            <Footer container>
                <Footer.Copyright href="#" by="femamudsky" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
    </div>
  );
}

export default Rodape; 
