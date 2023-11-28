import Cabecalho from '../../Components/Cabecalho';
import Titulos from '../../Components/Titulos';

function Home () {
      return (
            <div className='h-screen w-screen bg-planoFundo bg-cover bg-no-repeat bg-center'>

                  <div className='bg-black/35 h-full w-full'>

                        <Cabecalho color="branco"/>

                        <main 
                              className={`h-[75vh] w-screen pb-20 flex flex-col items-center justify-center`}
                        >
                              <Titulos
                                    titulo="Torne Seus Sonhos Realidade"
                                    subtitulo="Com constância e disciplina, qualquer objetivo é alcançado!"
                                    color="branco"
                              />
                        </main>
                  </div>

            </div>
      );
}

export default Home;