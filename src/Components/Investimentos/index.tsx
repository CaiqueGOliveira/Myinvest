import { useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";

import capaNoticia1 from "../../Assets/capaNoticia1.jpg";
import capaNoticia2 from "../../Assets/capaNoticia2.jpg";

import { SiTestcafe } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaCodeCompare } from "react-icons/fa6";

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

      return (
            <section className="w-full h-[87%] max-w-7xl flex gap-4 pt-8">
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
                                    bg="bg-neutral-900"
                                    marginTexto="mb-2"
                                    valores={valoresEvolucaoCarteira}
                              />
                        </div>

                        <ListagemAtivos
                              Titulo="Sua Carteira de ações"
                              tipoDaPagina={tipoDaPagina}
                        >
                              <thead>
                                    <tr>
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
                                          <th scope="col" className="font-medium bg-primary text-white">
                                                variação %
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
                                                      <tr className="cursor-pointer table-dark" key={linha.id}>
                                                            <td className="table-dark">{linha.nome}</td>
                                                            <td className="table-dark">{linha.codigo}</td>
                                                            <td className="table-dark">{linha.preco}</td>
                                                            <td className="table-dark">{linha.quantidade}</td>
                                                            <td className="table-dark">{linha.variacao}</td>
                                                            <td className="table-dark">{linha.totalInvestido}</td>
                                                      </tr>
                                                );
                                          })
                                    }
                              </tbody>
                        </ListagemAtivos>
                  </div>

                  <div className="flex flex-col w-[30%] h-full gap-3">
                        <div className="w-full h-1/3 min-h-[280px] flex flex-col gap-1 p-3 bg-neutral-900 text-white rounded-md border-[1px] border-zinc-500">
                              <div className="w-full">
                                    <h3 className="font-ptsans font-semibold">
                                          Ferramentas
                                    </h3>
                              </div>
                              <div className="w-full h-[90%] flex flex-col items-center gap-2 py-4">
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all shadow-sm">
                                          <i className="scale-125">
                                                <SiTestcafe />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Simulador
                                          </p>
                                    </div>
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <i className="scale-125">
                                                <TbBrandGoogleAnalytics />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Análise fundamentalista
                                          </p>
                                    </div>
                                    <div className="flex items-center gap-2 w-full h-12 px-3 rounded-md border-[1px] border-zinc-500 cursor-pointer hover:bg-neutral-600 transition-all  shadow-sm">
                                          <i className="scale-125">
                                                <FaCodeCompare />
                                          </i>
                                          <p className="font-ptsans ml-1">
                                                Comparar Ações
                                          </p>
                                    </div>
                              </div>
                        </div>

                        <div className="w-full h-2/3 min-h-[280px] flex flex-col gap-1 p-3 bg-neutral-900 rounded-md border-[1px] border-zinc-500 text-white">
                              <div className="w-full">
                                    <h3 className="font-ptsans font-semibold">
                                          Notícias
                                    </h3>
                              </div>

                              <div className="w-full h-[90%] max-h-[382px] overflow-y-scroll scroll-smooth custom-scroll flex flex-col items-center gap-2 py-4">
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
            </section>
      )
}

export default Investimentos;