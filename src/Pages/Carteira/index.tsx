import CabecalhoVertical from '../../Components/CabecalhoVertical';
import DivisaoAtivos from '../../Components/DivisaoAtivos';
import GraficoCarteira from '../../Components/GraficoCarteira';
import Saldo from '../../Components/Saldo';

import BitcoinIcon from "cryptocurrency-icons/32/color/btc.png";
import EtheriumIcon from "cryptocurrency-icons/32/color/eth.png";
import MaticIcon from "cryptocurrency-icons/32/color/matic.png";
import ChainLinkIcon from "cryptocurrency-icons/32/color/link.png";
import MakerDaoIcon from "cryptocurrency-icons/32/color/mkr.png";
import TetherIcon from "cryptocurrency-icons/32/color/usdt.png";
import UniswapIcon from "cryptocurrency-icons/32/color/uni.png";
import NtxIcon from "cryptocurrency-icons/32/color/nxt.png";
import DodgeCoinIcon from "cryptocurrency-icons/32/color/doge.png";

import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { GiCardExchange } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import MainContainer from '../../Components/MainContainer';

const Carteira = () => {

      const valoresEvolucaoCarteira = [2, 303, 704, 159, 290, 699]

      return (
            <div className='flex'>
                  <CabecalhoVertical />
                  
                  <MainContainer titulo='Carteira'>
                        <section className='w-full h-[87%] max-w-7xl flex flex-col items-center gap-4 pt-8'>
                              <Saldo />
                        
                              <div className='w-full h-[75%] flex gap-3'>
                                    <div className='flex flex-col w-[70%] h-full gap-3'>
                                          <div className='flex gap-3 w-full h-2/3'>
                                                <DivisaoAtivos 
                                                      width="w-full max-w-[380px]" 
                                                      height='h-full max-h-[380px]' 
                                                />

                                                <GraficoCarteira
                                                      width='w-full'
                                                      height='h-full max-h-[380px]'
                                                      bg='bg-neutral-900'
                                                      marginTexto='mb-4'
                                                      valores={valoresEvolucaoCarteira}
                                                />
                                          </div>

                                          <div className='flex w-full h-1/3 gap-3'>
                                                <div className='w-1/3 h-full bg-neutral-900 text-white rounded-md border-zinc-500 border-[1px] px-4 py-3'>
                                                      <div className='w-full h-max flex items-center gap-2'>
                                                            <i className='w-max h-max text-4xl text-blue-600'>
                                                                  <FaMoneyBillWave />
                                                            </i>
                                                            <h3 className='text-lg font-hind font-medium leading-3'>
                                                                  IPCA - <span className='text-sm text-zinc-300'>Taxa da inflação anual</span>
                                                            </h3>
                                                      </div>
                                                      <div className='w-full h-max flex items-center gap-3 pl-1 pt-2'>
                                                            <div>
                                                                  <h4 className='text-4xl'>4,23%</h4>
                                                                  <p className='text-sm text-zinc-300'>Nos ultimos 12 meses</p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className='w-1/3 h-full bg-neutral-900 text-white rounded-md border-zinc-500 border-[1px] px-4 py-3'>
                                                      <div className='w-full h-max flex items-center gap-2'>
                                                            <i className='w-max h-max text-4xl text-blue-600'>
                                                                  <FaPercentage />
                                                            </i>
                                                            <h3 className='text-lg font-hind font-medium leading-3'>
                                                                  Selic - <span className='text-sm text-zinc-300'>Taxa de Juros anual</span>
                                                            </h3>
                                                      </div>
                                                      <div className='w-full h-max flex items-center gap-3 pl-1 pt-2'>
                                                            <div>
                                                                  <h4 className='text-4xl'>10,50%</h4>
                                                                  <p className='text-sm text-zinc-300'>Nos ultimos 12 meses</p>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className='w-1/3 h-full bg-neutral-900 text-white rounded-md border-zinc-500 border-[1px] px-4 py-3'>
                                                      <div className='w-full h-max flex items-center gap-2'>
                                                            <i className='w-max h-max text-4xl text-blue-600'>
                                                                  <GiCardExchange />
                                                            </i>
                                                            <h3 className='text-lg font-hind font-medium leading-3'>
                                                                  CDI - <span className='text-sm text-zinc-300'>Taxa do CDI atual</span>
                                                            </h3>
                                                      </div>
                                                      <div className='w-full h-max flex items-center gap-3 pl-1 pt-2'>
                                                            <div>
                                                                  <h4 className='text-4xl'>11,68%</h4>
                                                                  <p className='text-sm text-zinc-300'>Nos ultimos 12 meses</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                          

                                    <div className='flex flex-col gap-1 w-[30%] h-full bg-neutral-900 text-white p-4 rounded-md border-zinc-500 border-[1px]'>
                                          <div className='w-full'>
                                                <h3 className='font-hind font-semibold'>
                                                      Criptomoedas
                                                </h3>

                                                <p className='text-sm text-zinc-300 font-semibold'>
                                                      Cotações das principais moedas
                                                </p>
                                          </div>

                                          <div className='w-full h-[90%] max-h-[464px] overflow-y-scroll custom-scroll scroll-smooth flex flex-col items-center gap-2 py-4'>
                                                <div className='flex items-center gap-2 w-full h-10 px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={BitcoinIcon} alt="Bitcoin Icon"/>
                                                      </i>
                                                      
                                                      <h3 className='font-hind font-semibold'>
                                                            Bitcoin R$: 360.000,00
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>10%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={EtheriumIcon} alt="Etherium icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Etherium R$: 19.800,00
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>6%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={MaticIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Matic R$: 2,54
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>2%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={ChainLinkIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            ChainLink R$: 77,00
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>1%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={MakerDaoIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            MakerDao R$: 15.000,00
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='text-xs'>20%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={UniswapIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Uniswap R$: 44,71
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>11%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={TetherIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Tether R$: 5,60
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>5%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={NtxIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Ntx R$: 0,30
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>28%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={DodgeCoinIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            DodgeCoin R$: 0,7462 
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>5%</span>
                                                      </i>
                                                </div>

                                                <div className='flex items-center gap-2 w-full h-10 px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={BitcoinIcon} alt="Bitcoin Icon"/>
                                                      </i>
                                                      
                                                      <h3 className='font-hind font-semibold'>
                                                            Bitcoin R$: 360.000,00
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>10%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={EtheriumIcon} alt="Etherium icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Etherium R$: 19.800,00
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>6%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={MaticIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Matic R$: 2,54
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>2%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={ChainLinkIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            ChainLink R$: 77,00
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>1%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={MakerDaoIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            MakerDao R$: 15.000,00
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='text-xs'>20%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={UniswapIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Uniswap R$: 44,71
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>11%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={TetherIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Tether R$: 5,60
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>5%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={NtxIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            Ntx R$: 0,30
                                                      </h3>

                                                      <i className='text-red-500 scale-110 flex ml-1'>
                                                            <HiArrowTrendingDown /> <span className='ml-1 text-xs'>28%</span>
                                                      </i>
                                                </div>

                                                <div className='w-full h-10 flex gap-2 items-center px-3 py-2 rounded-md border-[1px] border-zinc-500 hover:bg-neutral-600 transition-all cursor-pointer'>
                                                      <i className='w-8 h-8'>
                                                            <img src={DodgeCoinIcon} alt="Matic icon" />
                                                      </i>

                                                      <h3 className='font-hind font-semibold'>
                                                            DodgeCoin R$: 0,7462 
                                                      </h3>

                                                      <i className='text-green-400 scale-110 flex ml-1'>
                                                            <HiArrowTrendingUp /> <span className='ml-1 text-xs'>5%</span>
                                                      </i>
                                                </div>
                                          </div>
                                    </div>
                                    </div>
                        </section>
                  </MainContainer>
            </div>
      );
}

export default Carteira;