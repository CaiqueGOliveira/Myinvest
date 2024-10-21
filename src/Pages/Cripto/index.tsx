import { useState } from "react";
import CabecalhoVertical from "../../Components/CabecalhoVertical";
import MainContainer from "../../Components/MainContainer";
import SaldoCarteira from "../../Components/SaldoCarteira";
import { Table } from "react-bootstrap";

import { FaWallet } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Cripto = () => {
  const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

  return (
    <div className='flex'>
      <CabecalhoVertical />

      <MainContainer titulo="Criptomoedas">
              <section className="w-full h-[87%] max-w-7xl flex flex-col gap-4 pt-4">
                <div className="w-full h-1/3 flex gap-24">
                <div className="w-[45%] h-full flex flex-col gap-3 text-white">
                    <h4 className="h4">
                      Menu
                    </h4>

                    <div className="h-2/3 w-full grid grid-cols-4 grid-rows-2">
                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaWallet />
                        </i>
                        <p>
                          Carteira
                        </p>
                      </div>

                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaStar />
                        </i>
                        <p>
                          Favoritos
                        </p>
                      </div>

                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaWallet />
                        </i>
                        <p>
                          Carteira
                        </p>
                      </div>

                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaStar />
                        </i>
                        <p>
                          Favoritos
                        </p>
                      </div>

                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaWallet />
                        </i>
                        <p>
                          Carteira
                        </p>
                      </div>

                      <div className="flex items-center py-2 px-3 gap-2 h-max w-max border-[1px] border-zinc-500 rounded-md hover:bg-zinc-500 transition-all duration-300 cursor-pointer">
                        <i>
                          <FaStar />
                        </i>
                        <p>
                          Favoritos
                        </p>
                      </div>
                    </div>
                 </div>
                  
                  <SaldoCarteira
                        displaySaldo={displaySaldo}
                        setDisplaySaldo={setDisplaySaldo}
                        titulo={`Saldo em Criptos`}
                        saldo="0,00"
                        width="w-2/5"
                        height="h-full"
                  />
                </div>
                
                <div className="w-full h-2/3 pt-4">
                  <Table responsive hover borderless className="table-dark text-white rounded-md">
                      <thead>
                        <tr>
                          <th className="rounded-ltmd">
                            #
                          </th>
                          <th>
                            Cripto
                          </th>
                          <th>
                            code
                          </th>
                          <th>
                            Preço
                          </th>
                          <td>
                            1h %
                          </td>
                          <td>
                            24h %
                          </td>
                          <td>
                            7d %
                          </td>
                          <th>
                            cap. de mercado
                          </th>
                          <th className="rounded-rtmd">
                            Fornecimento Circulante
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Bitcoin
                          </td>
                          <td>
                            BTC
                          </td>
                          <td>
                            R$: 300,000
                          </td>
                          <td>
                            0.53%
                          </td>
                          <td>
                            0.83%
                          </td>
                          <td>
                            13.55%
                          </td>
                          <td>
                            R$ 7,53T
                          </td>
                          <td>
                            19,769,109 BTC
                          </td>
                        </tr>
                      </tbody>
                  </Table>
                </div>
              </section>
      </MainContainer>
    </div>
  )
}

export default Cripto;