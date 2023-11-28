import { useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";

type InvestimentosProps = {
      titulo: string;
}


const Investimentos = ({ titulo }: InvestimentosProps) => {
      const [displaySaldo, setDisplaySaldo] = useState<'hidden' | 'block'>('hidden');

      return (
            <div className="w-full h-[87%]">
                  <div className="w-full h-2/5 flex items-center justify-between px-14">
                        <SaldoCarteira 
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              titulo={`Saldo em ${titulo}`}
                              saldo="0,00"
                              width="w-1/3"
                        />

                        <GraficoCarteira width="w-2/5" height="h-full" bg="bg-white" />
                  </div>

                  <div className="w-full h-3/5 px-14 flex items-center justify-between">
                        <ListagemAtivos 
                              Titulo="Sua Carteira"
                        >
                              <thead>
                                    <tr className="bg-zinc-300 text-zinc-700 font-ptsans text-basemin">
                                          <td className="w-1/4 pl-4 py-1">Nome</td>
                                          <td className="w-1/4 py-1">Código</td>
                                          <td className="w-1/4 py-1">Preço</td>
                                          <td className="w-1/4 py-1">Quantidade</td>
                                    </tr>
                              </thead>

                              <tbody>

                              </tbody>
                        </ListagemAtivos>

                        <ListagemAtivos 
                              Titulo="Adicionar Ação"
                        >
                               <thead>
                                    <tr className="bg-zinc-300 text-zinc-700 font-ptsans text-basemin">
                                          <td className="w-1/4 pl-4 py-1">Nome</td>
                                          <td className="w-1/4 py-1">Código</td>
                                          <td className="w-1/4 py-1">Preço</td>
                                          <td className="w-1/4 py-1">Quantidade</td>
                                    </tr>
                              </thead>

                              <tbody>
                                    
                              </tbody>

                        </ListagemAtivos>
                  </div>
            </div>
      )
}

export default Investimentos;