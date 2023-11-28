import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";

const Exterior = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[82vw] h-screen bg-whiteLight">
              <CabecalhoPrincipal titulo="Exterior" />
        </main>
    </div>
  )
}

export default Exterior;