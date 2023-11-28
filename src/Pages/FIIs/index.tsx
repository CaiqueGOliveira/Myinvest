import CabecalhoPrincipal from '../../Components/CabecalhoPrincipal';
import CabecalhoVertical from '../../Components/CabecalhoVertical';
import Investimentos from '../../Components/Investimentos';

const FIIs = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight">
              <CabecalhoPrincipal titulo="Fundos Imobiliários" />

              <Investimentos titulo='Fiis' />
        </main>
    </div> 
  )
}

export default FIIs;