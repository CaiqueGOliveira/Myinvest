import { AiOutlineWallet } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbZoomMoney, TbPigMoney, TbBuildingCommunity } from "react-icons/tb";
import { MdTravelExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const CabecalhoVertical = () => {

  const location: string = window.location.pathname;
  const navigate = useNavigate();

  return (
      <header className="w-[15vw] max-w-[280px] h-screen bg-light py-10 flex flex-col items-center gap-10">
            <h3 
              className="text-xl font-hind font-semibold cursor-pointer"
              onClick={() => {navigate('/')}}
            >
              MyInvesting
            </h3>

            <div className="w-5/6 h-3/5 flex flex-col justify-center gap-2">
                  <p 
                    className={`header-nav ${location == "/carteira" ? 'bg-primary text-white' : ''}`}
                    onClick={() => {navigate('/carteira')}}
                  >
                      <AiOutlineWallet />
                      <span className="ml-1">Carteira</span>
                  </p>

                  <p 
                    className={`header-nav ${location == "/acoes" ? 'bg-primary text-white' : ''}`}
                    onClick={() => {navigate('/acoes')}}
                  >
                      <TbZoomMoney />
                      <span className="ml-1">Ações</span>
                  </p>

                  <p 
                    className={`header-nav ${location == "/fiis" ? 'bg-primary text-white' : ''}`}
                    onClick={() => {navigate('/fiis')}}
                  >
                      <TbBuildingCommunity />
                      <span className="ml-1">Fundos imobiliários</span>
                  </p>

                  <p 
                    className={`header-nav ${location == "/cripto" ? 'bg-primary text-white' : ''}`}
                    onClick={() => {navigate('/cripto')}}
                  >
                      <RiMoneyDollarCircleLine />
                      <span className="ml-1">Criptomoedas</span>
                  </p>

                  <p 
                    className={`header-nav ${location == "/rendafixa" ? 'bg-primary text-white' : ''}`}
                    onClick={() => {navigate('/rendafixa')}}
                  >
                     <TbPigMoney />
                     <span className="ml-1">Renda Fixa</span>
                  </p>

                  <p 
                    className={`header-nav ${location == "/exterior" ? 'bg-primary text-white' : ''}`}
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