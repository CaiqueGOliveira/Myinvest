import { useEffect, useState } from "react";
import CabecalhoVertical from "../../Components/CabecalhoVertical";
import Investimentos from "../../Components/Investimentos";
import MainContainer from "../../Components/MainContainer";
import axios from "axios";

interface listaAcoesObj {
  id: number,
  nome: string,
  codigo: string,
  preco: string,
  quantidade: number,
  variacao: string,
  totalInvestido: string
}

const Acoes = () => {
    const [listaAcoes, setListaAcoes] = useState<listaAcoesObj[]>([]);

    useEffect(() => {
      axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=G6INWHKJ7C8B1K0B')
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
    }, [listaAcoes])

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