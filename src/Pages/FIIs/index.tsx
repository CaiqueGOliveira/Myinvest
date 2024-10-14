import CabecalhoVertical from '../../Components/CabecalhoVertical';
import Investimentos from '../../Components/Investimentos';
import MainContainer from '../../Components/MainContainer';

const FIIs = () => {

    const listaFundosImobiliarios = [
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
        variacao: "+55%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 4,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+54%",
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 5,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+45%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 6,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+15%",
        totalInvestido: 'R$: 558,00'
      },
      {
        id: 7,
        nome: 'Banco do Brasil',
        codigo: 'BBAS3',
        preco: 'R$: 22,50',
        quantidade: 40,
        variacao: "+35%",
        totalInvestido: 'R$: 900,00'
      },
      {
        id: 8,
        nome: 'Klabin',
        codigo: 'KLBN3',
        preco: 'R$: 4,64',
        quantidade: 120,
        variacao: "+54%",
        totalInvestido: 'R$: 558,00'
      },
      
    ];

    const valoresEvolucaoCarteira = [1, 3, 4, 29, 190, 290]

    return (
      <div className='flex'>
          <CabecalhoVertical />

          <MainContainer titulo='Fundos Imobiliários'>
                <Investimentos 
                  titulo='em Fiis' 
                  tipoDaPagina='Fundo Imobiliário'
                  listaAtivos={listaFundosImobiliarios}
                  valoresEvolucaoCarteira={valoresEvolucaoCarteira}
                />
          </MainContainer>
      </div> 
    )
}

export default FIIs;