import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";


const Cripto = () => {
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[85vw] h-screen bg-whiteLight px-14 pb-8 flex flex-col items-center">
              <CabecalhoPrincipal titulo="Criptomoedas" />

              <section className="w-full h-[87%] max-w-7xl flex gap-4">


              </section>
        </main>
    </div>
  )
}

export default Cripto;