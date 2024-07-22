import { useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";


type InvestimentosProps = {
      titulo: string;
      tipoDaPagina: string,
      listaAtivos: {
            id: number, 
            nome: string, 
            codigo: string, 
            preco: string, 
            quantidade: number, 
            totalInvestido: string
      }[],
}


const Investimentos = ({ titulo, tipoDaPagina, listaAtivos }: InvestimentosProps) => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <section className="w-full h-[87%] max-w-7xl flex flex-col xl:flex-row items-center gap-4">
                  <div className="w-full max-w-7xl h-1/3 flex justify-between gap-3 xl:flex-col xl:h-[90%] xl:w-5/12">
                        <SaldoCarteira
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              titulo={`Saldo em ${titulo}`}
                              saldo="0,00"
                              width="w-1/2 max-w-[420px] xl:w-full xl:max-w-xl"
                              height="h-full xl:h-[45%]"
                        />

                        <GraficoCarteira 
                              width="w-1/2 max-w-[420px] xl:w-full xl:max-w-xl" 
                              height="h-full xl:h-[55%]" 
                              bg="bg-white"
                        />
                  </div>

                  <ListagemAtivos
                        Titulo="Sua Carteira de ações"
                        tipoDaPagina={tipoDaPagina}
                  >
                        <thead>
                              <tr className="bg-primary">
                                    <th scope="col" className="font-medium bg-primary text-white rounded-ltmd">
                                          {tipoDaPagina}
                                    </th>
                                    <th scope="col" className="font-medium bg-primary text-white">
                                          Código
                                    </th>
                                    <th scope="col" className="font-medium bg-primary text-white">
                                          Preço
                                    </th>
                                    <th scope="col" className="font-medium bg-primary text-white">
                                          Quantidade
                                    </th>
                                    <th scope="col" className="font-medium bg-primary text-white rounded-rtmd">
                                          Total investido
                                    </th>
                              </tr>
                        </thead>

                        <tbody>
                              {
                                    listaAtivos.map(linha => {
                                          return (
                                                <tr className="cursor-pointer" key={linha.id}>
                                                      <td>{linha.nome}</td>
                                                      <td>{linha.codigo}</td>
                                                      <td>{linha.preco}</td>
                                                      <td>{linha.quantidade}</td>
                                                      <td>{linha.totalInvestido}</td>
                                                </tr>
                                          );
                                    })
                              }
                        </tbody>
                  </ListagemAtivos>
            </section>
      )
}

export default Investimentos;