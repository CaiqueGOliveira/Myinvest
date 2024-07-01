import { useState } from "react";
import SaldoCarteira from "../SaldoCarteira";
import GraficoCarteira from "../GraficoCarteira";
import ListagemAtivos from "../ListagemAtivos";


type InvestimentosProps = {
      titulo: string;
      tipoDaPagina: string,
}


const Investimentos = ({ titulo, tipoDaPagina }: InvestimentosProps) => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <div className="w-full h-[87%] flex flex-col gap-4">
                  <div className="w-full h-1/3 flex justify-between">
                        <SaldoCarteira
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              titulo={`Saldo em ${titulo}`}
                              saldo="0,00"
                              width="w-1/2 max-w-[420px]"
                              height="h-full"
                        />

                        <GraficoCarteira 
                              width="w-1/2 max-w-[420px]" 
                              height="h-full" 
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
                              <tr>
                                    <td>Banco do Brasil</td>
                                    <td>BBAS3</td>
                                    <td>R$: 22,50</td>
                                    <td>40</td>
                                    <td>900</td>
                              </tr>

                              <tr>
                                    <td>Klabin</td>
                                    <td>KLBN3</td>
                                    <td>R$: 4,65</td>
                                    <td>120</td>
                                    <td>558</td>
                              </tr>

                              <tr>
                                    <td>Banco Itau</td>
                                    <td>ITB4N</td>
                                    <td>R$: 10,50</td>
                                    <td>60</td>
                                    <td>630</td>
                              </tr>

                              <tr>
                                    <td>Banco do Brasil</td>
                                    <td>BBAS3</td>
                                    <td>R$: 22,50</td>
                                    <td>40</td>
                                    <td>900</td>
                              </tr>

                              <tr>
                                    <td>Klabin</td>
                                    <td>KLBN3</td>
                                    <td>R$: 4,65</td>
                                    <td>120</td>
                                    <td>558</td>
                              </tr>

                              <tr>
                                    <td>Banco Itau</td>
                                    <td>ITB4N</td>
                                    <td>R$: 10,50</td>
                                    <td>60</td>
                                    <td>630</td>
                              </tr>

                              <tr>
                                    <td>Banco do Brasil</td>
                                    <td>BBAS3</td>
                                    <td>R$: 22,50</td>
                                    <td>40</td>
                                    <td>900</td>
                              </tr>

                              <tr>
                                    <td>Klabin</td>
                                    <td>KLBN3</td>
                                    <td>R$: 4,65</td>
                                    <td>120</td>
                                    <td>558</td>
                              </tr>

                              <tr>
                                    <td>Banco Itau</td>
                                    <td>ITB4N</td>
                                    <td>R$: 10,50</td>
                                    <td>60</td>
                                    <td>630</td>
                              </tr>

                              <tr>
                                    <td>Klabin</td>
                                    <td>KLBN3</td>
                                    <td>R$: 4,65</td>
                                    <td>120</td>
                                    <td>558</td>
                              </tr>

                              <tr>
                                    <td>Banco Itau</td>
                                    <td>ITB4N</td>
                                    <td>R$: 10,50</td>
                                    <td>60</td>
                                    <td>630</td>
                              </tr>
                        </tbody>
                  </ListagemAtivos>
            </div>
      )
}

export default Investimentos;