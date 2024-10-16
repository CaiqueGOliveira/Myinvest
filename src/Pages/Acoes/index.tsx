import CabecalhoVertical from "../../Components/CabecalhoVertical";
import Investimentos from "../../Components/Investimentos";
import MainContainer from "../../Components/MainContainer";


const Acoes = () => {
    const listaAcoes = [
      {
        id: 1,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+5%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 2,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+5%",
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 3,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+5%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 4,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+5%",
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 5,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+5%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 6,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+25%",
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 7,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+53%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 8,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+12%",
        totalInvestido: 'R$: 558,00'
      },
      
    ];

    const valoresEvolucaoCarteira = [1, 300, 700, 130, 100, 409, 190, 203, 1000];

    return (
      <div className='flex'>
          <CabecalhoVertical />

          <MainContainer titulo="Ações">
                <Investimentos
                  titulo="em Ações" 
                  tipoDaPagina="Ação" 
                  listaAtivos={listaAcoes}
                  valoresEvolucaoCarteira={valoresEvolucaoCarteira}
                />
          </MainContainer>
      </div>
    )
}

export default Acoes;