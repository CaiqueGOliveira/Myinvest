import CabecalhoPrincipal from "../../Components/CabecalhoPrincipal";
import CabecalhoVertical from "../../Components/CabecalhoVertical";
import Investimentos from "../../Components/Investimentos";

const Exterior = () => {

  const listaAcoes = [
    {
      id: 0, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 1, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 2, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 3, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 4, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 2, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 3, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    },
    {
      id: 4, 
      nome: "Tesla", 
      codigo: "sei la", 
      preco: "R$: 120,00", 
      quantidade: 20,
      variacao: "+5%",
      totalInvestido: "R$: 2.400,00"
    }
  ];

  const valoresEvolucaoCarteira = [2,2,4,2,9,2,22,2];
  
  return (
    <div className='flex'>
        <CabecalhoVertical />

        <main className="w-[85vw] h-screen bg-whiteLight px-14 pb-8 flex flex-col items-center">
              <CabecalhoPrincipal titulo="Exterior" />

              <Investimentos
                titulo="no Exterior" 
                tipoDaPagina="Ação" 
                listaAtivos={listaAcoes}
                valoresEvolucaoCarteira={valoresEvolucaoCarteira}
              />
        </main>
    </div>
  )
}

export default Exterior;