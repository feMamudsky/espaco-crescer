import './PsicanaliseText.css';
import FotoMateus from '../../../assets/img/MateusGama.jpg';

function PsicanaliseText() {
    return(
        <div className='mae-psicanalise-text'>
                        <div className='container-geral-psicana'>
                <div className='psicana-intro-container'>
                    <h1 className='psicana-h1-intro'>
                        O que é a psicanalise?
                    </h1>{/* psicana-h1 */}
                    <p className='psicana-p-intro'>
                    A psicanálise é uma abordagem terapêutica que explora o inconsciente para entender e tratar conflitos emocionais e 
                    psíquicos. Fundada por Sigmund Freud, ela utiliza técnicas como a livre associação e a análise dos sonhos para ajudar 
                    os indivíduos a descobrir e resolver questões profundas, promovendo autoconhecimento e alívio de sintomas.                    </p>{/* psicana-p-intro */}
                </div>{/* psicana-intro-container */}
                <div className='text-corpo-psicana'>
                    <h1 className='psicana-h1-corpo'>
                        Mateus Gama Rodrigues - Psicanalista
                    </h1>{/* psicana-h1-corpo */}
                    <img src={FotoMateus} className='foto-mateus-sorridente'></img>
                    <p className='psicana-p1-corpo'>
                    Mateus Gama Rodrigues é psicanalista filiado à Associação Brasileira de Psicanálise número 10.232 e Terapeuta 
                    familiar. Dedica-se em ajudar pessoas com traumas, preocupações, medos e dores emocionais por meio da terapia 
                    psicanalítica. Junto com o cliente percorre caminhos nos quais somos confrontados por questões pessoais, sociais e 
                    familiares. Palestra com temas de educação, psicanálise, saúde mental, empreendedorismo e desenvolvimento pessoal.
                    </p>{/* psicana-p1-corpo */}
                    <p className='psicana-p2-corpo'>
                    A psicanálise é uma abordagem que trabalha com o inconsciente e os padrões de comportamento e emoções reprimidas. 
                    Com a escuta terapêutica e a interpretação do simbolismo dos sonhos e da fala do cliente, a equipe do Crescer busca 
                    auxiliar o cliente a se compreender e lidar com suas emoções e traumas, possibilitando o seu crescimento pessoal.
                    </p>{/* psicana-p2-corpo */}
                </div>{/* text-corpo-psicana */}
            </div>{/* container-geral-psicana */}
        </div>
    )
}

export default PsicanaliseText;