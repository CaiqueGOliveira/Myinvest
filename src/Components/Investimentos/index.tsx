import { useEffect, useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";

import capaNoticia1 from "../../Assets/capaNoticia1.jpg";
import capaNoticia2 from "../../Assets/capaNoticia2.jpg";

type InvestimentosProps = {
      titulo: string;
      tipoDaPagina: string,
      listaAtivos: {
            id: number, 
            nome: string, 
            codigo: string, 
            preco: string,
            variacao: string, 
            quantidade: number, 
            totalInvestido: string
      }[],
      valoresEvolucaoCarteira: number[],
}

const Investimentos = ({ titulo, tipoDaPagina, listaAtivos, valoresEvolucaoCarteira }: InvestimentosProps) => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');
      const [listaLength, setListaLength] = useState<number>(0);

      useEffect(() => {
            setListaLength(listaAtivos.length);
      }, [listaAtivos])

      return (
            <section className="w-full h-[90%] max-w-7xl flex gap-4 pt-8">
                  <div className="flex flex-col w-1/2 h-full gap-3">
                        <div className="w-full h-2/5 max-h-[280px] flex gap-3">
                              <SaldoCarteira
                                    displaySaldo={displaySaldo}
                                    setDisplaySaldo={setDisplaySaldo}
                                    titulo={`Saldo ${titulo}`}
                                    saldo="0,00"
                                    width="w-2/5"
                                    height="h-full"
                              />

                              <GraficoCarteira
                                    width="w-3/5"
                                    height="h-full"
                                    bg="bg-neutral-900"
                                    marginTexto="mb-2"
                                    valores={valoresEvolucaoCarteira}
                              />
                        </div>

                        <div className="w-full h-3/5 flex flex-col gap-3 p-3 bg-neutral-900 rounded-md border-[1px] border-zinc-500 text-white">
                              <div className="w-full">
                                    <h3 className="font-ptsans font-semibold">
                                          Notícias
                                    </h3>
                              </div>

                              <div className="w-full h-[90%] max-h-[382px] overflow-y-scroll scroll-smooth custom-scroll flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia1}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      O petróleo no brasil irá acabar?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      Ciêntistas afirmam que em 2027 a produção de petróleo da plataforma do pré sal cairá pela metade.
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Petróleo <span className="text-red-600 font-hind font-semibold">-10%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia2}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Microsoft, será o fim?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      As ações da Microsoft não são baratas, mas a narrativa da inteligência artificial está 'longe de ser completa', diz UBS
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Microsoft <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia1}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      O petróleo no brasil irá acabar?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      Ciêntistas afirmam que em 2027 a produção de petróleo da plataforma do pré sal cairá pela metade.
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Petróleo <span className="text-red-600 font-hind font-semibold">-10%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia2}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Microsoft, será o fim?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      As ações da Microsoft não são baratas, mas a narrativa da inteligência artificial está 'longe de ser completa', diz UBS
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Microsoft <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia1}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      O petróleo no brasil irá acabar?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      Ciêntistas afirmam que em 2027 a produção de petróleo da plataforma do pré sal cairá pela metade.
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Petróleo <span className="text-red-600 font-hind font-semibold">-10%</span>
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full h-max max-h-40 px-2 py-2 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <img 
                                                className="h-20 w-20 rounded-md"
                                                src={capaNoticia2}
                                                alt="Foto de capa da notícia"
                                          />

                                          <div className="flex flex-col ml-2">
                                                <h4 className="text-sm font-ptsans font-semibold">
                                                      Microsoft, será o fim?
                                                </h4>

                                                <p className="font-ptsans text-[11px]">
                                                      As ações da Microsoft não são baratas, mas a narrativa da inteligência artificial está 'longe de ser completa', diz UBS
                                                </p>

                                                <p className="font-ptsans text-xs font-semibold">
                                                      Microsoft <span className="text-green-600 font-hind font-semibold">+5%</span>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className="w-1/2 h-full">
                        <ListagemAtivos
                              Titulo="Sua Carteira de ações"
                              tipoDaPagina={tipoDaPagina}
                              listaLength={listaLength}
                        >
                              <thead>
                                    <tr className="whitespace-nowrap font-medium text-sm">
                                          <th scope="col" className="bg-primary text-white rounded-ltmd">
                                                {tipoDaPagina}
                                          </th>
                                          <th scope="col" className="bg-primary text-white">
                                                Código
                                          </th>
                                          <th scope="col" className="bg-primary text-white">
                                                Preço
                                          </th>
                                          <th scope="col" className="bg-primary text-white">
                                                Quantidade
                                          </th>
                                          <th scope="col" className="bg-primary text-white">
                                                variação %
                                          </th>
                                          <th scope="col" className="bg-primary text-white rounded-rtmd">
                                                Total investido
                                          </th>
                                    </tr>
                              </thead>

                              <tbody>
                                    {
                                          listaAtivos.map(linha => {
                                                return (
                                                      <tr className="cursor-pointer table-dark text-sm" key={linha.id}>
                                                            <td className="table-dark">{linha.nome}</td>
                                                            <td className="table-dark">{linha.codigo}</td>
                                                            <td className="table-dark text-end">{linha.preco}</td>
                                                            <td className="table-dark text-end">{linha.quantidade}</td>
                                                            <td className="table-dark text-end">{linha.variacao}</td>
                                                            <td className="table-dark text-end">{linha.totalInvestido}</td>
                                                      </tr>
                                                );
                                          })
                                    }
                              </tbody>
                        </ListagemAtivos>
                  </div>
            </section>
      )
}

export default Investimentos;