import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";
import Investimentos from "../../Components/Investimentos";


const Acoes = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight">
              <CabecalhoPrincipal titulo="Ações" />

              <Investimentos titulo="ações" />
        </main>
    </div>
  )
}

export default Acoes;