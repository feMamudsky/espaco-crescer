import { BrowserRouter as Roteador, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Espaco from "./Pages/Espaco/Espaco";
import Psicopedagogia from "./Pages/Psicopedagogia/Psicopedagogia";
import Psicanalise from "./Pages/Psicanalise/Psicanalise";
import Psicologia from "./Pages/Psicologia/Psicologia";
import Contato from "./Pages/Contato/Contato";
import Eventos from "./Pages/Eventos/Eventos";

function AppRoutes() {
    return (
        <>
            {/* Configura o roteador para gerenciar as rotas da aplicação */}
            <Roteador>
                {/* Define as rotas da aplicação */}
                <Routes>
                    {/* Define a rota para a página inicial */}
                    <Route exact path='/' Component={Home} />
                    {/* Define a rota para as páginas do projeto */}
                    <Route path='/Espaco' Component={Espaco} />
                    <Route path='/Psicopedagogia' Component={Psicopedagogia} />
                    <Route path='/Psicanalise' Component={Psicanalise} />
                    <Route path='/Psicologia' Component={Psicologia} />
                    <Route path='Contato' Component={Contato} />
                    <Route path='./Eventos' Component={Eventos} />

                </Routes>
            </Roteador>
        </>
    )
}

export default AppRoutes;