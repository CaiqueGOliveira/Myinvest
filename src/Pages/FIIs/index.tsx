import CabecalhoPrincipal from '../../Components/CabecalhoPrincipal';
import CabecalhoVertical from '../../Components/CabecalhoVertical';
import Investimentos from '../../Components/Investimentos';

const FIIs = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight px-14 pb-8">
              <CabecalhoPrincipal titulo="Fundos Imobiliários" />

              <Investimentos titulo='Fiis' tipoDaPagina='Fundo Imobiliário' />
        </main>
    </div> 
  )
}

export default FIIs;