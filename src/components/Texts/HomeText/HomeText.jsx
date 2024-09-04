import './homeText.css'; // Importa o arquivo de estilos para o componente

function HomeText() {
    return(
        <>
            {/* Container principal do texto da home */}
            <div className='maeHome'>
                
                {/* Contêiner que envolve o texto e formatações internas */}
                <div className='container-HomeText'>
                    
                    {/* Contêiner para os títulos */}
                    <div className='container-h1-HomeText'>
                        <h1 className='h1-HomeText1'>Um lugar para a escuta,</h1>
                        <h1 className='h1-HomeText2'>compreensão e desenvolvimento.</h1>
                    </div> {/* Contêiner de títulos */}

                    {/* Contêiner para os parágrafos */}
                    <div className='container-p-HomeText'>
                        <p className='p-HomeText1'>
                            O Espaço Crescer é um lugar para quem busca aprimoramento pessoal e emocional. Atuando em Sertãozinho/SP desde 
                            outubro de 2020, o Crescer possui uma equipe de profissionais capacitados nas áreas de psicopedagogia, psicanálise 
                            e psicologia, prontos para auxiliar pessoas em seus desafios emocionais e cognitivos.
                        </p> {/* Primeiro parágrafo */}

                        <p className='p-HomeText2'>
                            Com uma abordagem integrada e personalizada, o Espaço Crescer oferece serviços de qualidade e uma escuta acolhedora 
                            para cada cliente, auxiliando-o em seus processos de aprendizagem, crescimento e desenvolvimento pessoal.
                        </p> {/* Segundo parágrafo */}

                        <p className='p-HomeText3'>
                            O ambiente do Espaço Crescer é acolhedor e confortável, com sala equipada para atendimento individual ou em grupo. 
                            Com uma equipe de profissionais experientes e dedicados, o Crescer oferece um espaço para a escuta, reflexão, 
                            compreensão e desenvolvimento, proporcionando aos seus clientes um processo terapêutico de qualidade e efetivo.
                        </p> {/* Terceiro parágrafo */}

                        <p className='p-HomeText4'>
                            Se você está em busca de desenvolvimento pessoal, emocional ou cognitivo, não deixe de conhecer o Espaço Crescer. 
                            Entre em contato conosco e agende uma consulta para saber mais sobre os nossos serviços e como podemos ajudá-lo(a) 
                            em seu processo de crescimento e desenvolvimento.                        
                        </p> {/* Quarto parágrafo */}
                        
                        {/* Texto duplicado? Este trecho parece ser uma duplicação do quarto parágrafo */}
                        Se você está em busca de desenvolvimento pessoal, emocional ou cognitivo, não deixe de conhecer o Espaço Crescer. 
                        Entre em contato conosco e agende uma consulta para saber mais sobre os nossos serviços e como podemos ajudá-lo(a) 
                        em seu processo de crescimento e desenvolvimento.
                    </div> {/* Contêiner de parágrafos */}
                    
                </div> {/* Contêiner principal de homeText */}
            </div> {/* Container principal */}
        </>
    )
}

export default HomeText;
