import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";


const Cripto = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight">
              <CabecalhoPrincipal titulo="Criptomoedas" />
        </main>
    </div>
  )
}

export default Cripto;