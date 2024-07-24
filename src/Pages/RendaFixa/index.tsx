import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";


const RendaFixa = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[85vw] h-screen bg-whiteLight px-14 pb-8 flex flex-col items-center">
              <CabecalhoPrincipal titulo="Exterior" />

        </main>
    </div> 
  )
}

export default RendaFixa;