import './PsicopedagogiaText.css';
import FotoMaria from '../../../assets/img/MariaMamud.jpeg';

function PsicopedagogiaText() {
    return(
        <div className='mae-psicope'>
            <div className='container-geral-psicope'>
                <div className='psicope-intro-container'>
                    <h1 className='psicope-h1-intro'>
                        O que é a Psicopedagogia?
                    </h1>{/* psicope-h1 */}
                    <p className='psicope-p-intro'>
                    A psicopedagogia estuda os processos de aprendizagem, buscando identificar e tratar dificuldades cognitivas e 
                    emocionais. Ela combina educação e psicologia para melhorar o desenvolvimento e o bem-estar do aluno, promovendo 
                    estratégias eficazes de ensino e aprendizado.
                    </p>{/* psicope-p-intro */}
                </div>{/* psicope-intro-container */}
                <div className='text-corpo-psicope'>
                    <h1 className='psicope-h1-corpo'>
                        Maria Mamud - Psicopedagoga
                    </h1>{/* psicope-h1-corpo */}
                    <img src={FotoMaria} className='foto-maria-sorridente'></img>
                    <p className='psicope-p1-corpo'>
                    A psicopedagoga Maria Mamud é formada em Pedagogia pela UNIP, pós-graduada em Psicopedagogia Clínica e 
                    Institucional pela FATECE, possui MBA em Gestão Escolar pela USP ESALQ. Atua com dificuldades de aprendizagem e 
                    palestras.
                    </p>{/* psicope-p1-corpo */}
                    <p className='psicope-p2-corpo'>
                    A psicopedagogia é um dos serviços oferecidos pelo Crescer, voltado para crianças, adolescentes e adultos com 
                    dificuldades de aprendizagem, transtornos de atenção, dislexia, discalculia, entre outros. Através de técnicas 
                    específicas, os profissionais do Crescer auxiliam o cliente a superar suas dificuldades, contribuindo para a melhoria do 
                    desempenho acadêmico e pessoal.
                    </p>{/* psicope-p2-corpo */}
                </div>{/* text-corpo-psicope */}
            </div>{/* container-geral-psicope */}
        </div>
    )
}

export default PsicopedagogiaText;