import CabecalhoPrincipal from '../../Components/CabecalhoPrincipal';
import CabecalhoVertical from '../../Components/CabecalhoVertical';
import DivisaoAtivos from '../../Components/DivisaoAtivos';
import GraficoCarteira from '../../Components/GraficoCarteira';
import Saldo from '../../Components/Saldo';


const Carteira = () => {
      return (
            <div className='flex'>
                  <CabecalhoVertical />
                  
                  <main className='w-[82vw] h-screen bg-whiteLight px-14 pb-8'>
                        <CabecalhoPrincipal titulo='Carteira'/>

                        <section className='w-full h-[87%] flex flex-col gap-5'>
                              <Saldo />
                        
                              <div className='w-full h-[60%] flex justify-between'>
                                    <DivisaoAtivos />

                                    <GraficoCarteira 
                                          width='w-[60%]'
                                          height='h-full'
                                          bg='bg-zinc-50'
                                    />
                              </div>
                        </section>
                  </main>
            </div>
      );
}

export default Carteira;