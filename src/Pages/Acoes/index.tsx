import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";
import Investimentos from "../../Components/Investimentos";


const Acoes = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight px-14 pb-8">
              <CabecalhoPrincipal titulo="Ações" />

              <Investimentos titulo="ações" tipoDaPagina="Ação" />
        </main>
    </div>
  )
}

export default Acoes;