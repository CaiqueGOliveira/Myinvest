import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";


const RendaFixa = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight px-14 pb-8">
              <CabecalhoPrincipal titulo="Renda Fixa" />
        </main>
    </div> 
  )
}

export default RendaFixa;