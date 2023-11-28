import CabecalhoPrincipal from '../../Components/CabecalhoPrincipal';
import CabecalhoVertical from '../../Components/CabecalhoVertical';
import DivisaoAtivos from '../../Components/DivisaoAtivos';
import GraficoCarteira from '../../Components/GraficoCarteira';
import Saldo from '../../Components/Saldo';


const Carteira = () => {
      return (
            <div className='flex'>
                  <CabecalhoVertical />
                  
                  <main className='w-[82vw] h-screen bg-whiteLight'>
                        <CabecalhoPrincipal titulo='Carteira'/>

                        <section className='w-[95%] h-[87%] mx-auto flex flex-col justify-around gap-7'>
                              <Saldo />
                        
                              <div className='w-full h-[70%] flex justify-between px-5'>
                                    <DivisaoAtivos />

                                    <GraficoCarteira />
                              </div>
                        </section>
                  </main>
            </div>
      );
}

export default Carteira;