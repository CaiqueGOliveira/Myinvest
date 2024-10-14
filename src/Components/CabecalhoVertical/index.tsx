import { AiOutlineWallet } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbZoomMoney, TbPigMoney, TbBuildingCommunity } from "react-icons/tb";
import { MdTravelExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const CabecalhoVertical = () => {

  const location: string = window.location.pathname;
  const navigate = useNavigate();

  return (
      <header className="w-[15vw] max-w-[280px] h-screen py-10 flex flex-col items-center gap-10 border-r-[1px] bg-neutral-900 border-zinc-500">
            <h3 
              className="text-xl text-white font-hind font-semibold cursor-pointer"
              onClick={() => {navigate('/')}}
            >
              MyInvesting
            </h3>

            <div className="w-5/6 h-3/5 flex flex-col justify-center gap-3">
                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/carteira" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/carteira')}}
                  >
                      <AiOutlineWallet />
                      <span className="ml-1">Carteira</span>
                  </p>

                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/acoes" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/acoes')}}
                  >
                      <TbZoomMoney />
                      <span className="ml-1">Ações</span>
                  </p>

                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/fiis" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/fiis')}}
                  >
                      <TbBuildingCommunity />
                      <span className="ml-1">Fundos imobiliários</span>
                  </p>

                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/cripto" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/cripto')}}
                  >
                      <RiMoneyDollarCircleLine />
                      <span className="ml-1">Criptomoedas</span>
                  </p>

                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/rendafixa" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/rendafixa')}}
                  >
                     <TbPigMoney />
                     <span className="ml-1">Renda Fixa</span>
                  </p>

                  <p 
                    className={`w-full h-12 flex items-center pl-3 rounded-lg cursor-pointer font-hind border-[1px] border-zinc-400 ${location == "/exterior" ? 'bg-neutral-100 text-black font-semibold border-none' : 'text-white'}`}
                    onClick={() => {navigate('/exterior')}}
                  >
                      <MdTravelExplore />
                      <span className="ml-1">Exterior</span>
                  </p>
            </div>
      </header>
  );
}

export default CabecalhoVertical;