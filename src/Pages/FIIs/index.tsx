import CabecalhoPrincipal from '../../Components/CabecalhoPrincipal';
import CabecalhoVertical from '../../Components/CabecalhoVertical';
import Investimentos from '../../Components/Investimentos';

const FIIs = () => {

    const listaFundosImobiliarios = [
      {
        id: 1,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 2,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 3,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 4,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 5,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 6,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 7,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 8,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        totalInvestido: 'R$: 558,00'
      },
      
    ];

    const valoresEvolucaoCarteira = [1, 3, 4, 29, 190, 290]

    return (
      <div className='flex'>
          <CabecalhoVertical />

          <main className="w-[85vw] h-screen bg-whiteLight px-14 pb-8 flex flex-col items-center">
                <CabecalhoPrincipal titulo="Fundos Imobiliários"/>

                <Investimentos 
                  titulo='em Fiis' 
                  tipoDaPagina='Fundo Imobiliário'
                  listaAtivos={listaFundosImobiliarios}
                  valoresEvolucaoCarteira={valoresEvolucaoCarteira}
                />
          </main>
      </div> 
    )
}

export default FIIs;