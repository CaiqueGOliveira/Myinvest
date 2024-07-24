import { useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";

import { GrPlan } from "react-icons/gr";

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
      valoresEvolucaoCarteira: number[],
}


const Investimentos = ({ titulo, tipoDaPagina, listaAtivos, valoresEvolucaoCarteira }: InvestimentosProps) => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <section className="w-full h-[87%] max-w-7xl flex gap-4">
                  <div className="flex flex-col w-[70%] h-full gap-3">
                        <div className="w-full h-full max-h-[280px] flex gap-3">
                              <SaldoCarteira
                                    displaySaldo={displaySaldo}
                                    setDisplaySaldo={setDisplaySaldo}
                                    titulo={`Saldo ${titulo}`}
                                    saldo="0,00"
                                    width="w-1/2"
                                    height="h-full"
                              />

                              <GraficoCarteira
                                    width="w-1/2"
                                    height="h-full"
                                    bg="bg-white"
                                    marginTexto="mb-2"
                                    valores={valoresEvolucaoCarteira}
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
                  </div>

                  <div className="flex flex-col w-[30%] h-full gap-3">
                        <div className="w-full h-1/3 min-h-[280px] flex flex-col gap-1 p-4 bg-zinc-50 rounded-md border-2 border-zinc-200 shadow-md">
                              <div className="w-full">
                                    <h3 className="font-ptsans font-semibold">
                                          Ferramentas
                                    </h3>
                              </div>
                              <div className="w-full h-[90%] flex flex-col items-center gap-2 py-4">
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Simulador
                                          </p>
                                    </div>
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Análise fundamentalista
                                          </p>
                                    </div>
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Comparar Ações
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="w-full h-2/3 min-h-[280px] flex flex-col gap-1 p-4 bg-zinc-50 rounded-md border-2 border-zinc-200 shadow-md">
                              <div className="w-full">
                                    <h3 className="font-ptsans font-semibold">
                                          Notícias
                                    </h3>
                              </div>

                              <div className="w-full h-[90%] max-h-[382px] overflow-y-scroll scroll-smooth flex flex-col items-center gap-2 py-4">
                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-20 pl-3 py-2 rounded-md border-2 border-zinc-300 cursor-pointer hover:bg-zinc-200">
                                          <i className="scale-125">
                                                <GrPlan />
                                          </i>

                                          <div className="flex flex-col ml-1">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Titulo da notícia
                                                </h4>

                                                <p className="font-ptsans text-xs ml-1">
                                                      Frase de descrição da notícia e do artigo. <br />
                                                      BTC <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Investimentos;