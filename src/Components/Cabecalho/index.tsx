import { useNavigate } from "react-router-dom";
import { IoMdMenu } from 'react-icons/io';
import { useState } from "react";

type CabecalhoProps = {
  color: 'branco' | 'preto';
}

const Cabecalho = ({ color }: CabecalhoProps) => {
  const location = useNavigate();
  const [mobileDropDown, setMobileDropDown] = useState<boolean>(false);
  const [desktopDropDown, setDesktopDropDown] = useState<boolean>(false);

  return (
      <header className={`min-h-[12vh] flex justify-between items-center px-5 ssm:px-10 relative lg:px-28 ${color == 'preto' ? 'border-b-[1px] border-black' : ''}`}
      >
          <h3
            className={`${color == 'branco' ? 'text-white' : 'text-zinc-700 font-medium'} text-2.5xl cursor-pointer pb-2`}
            onClick={() => {
              location("/");
            }}
          >
            MyInvesting
          </h3>

          {/* Display Mobile */}
          <i 
            className={`${color == 'branco' ? 'text-white' : 'text-zinc-700'} cursor-pointer lg:hidden`}
            onClick={() => {mobileDropDown ? setMobileDropDown(false) : setMobileDropDown(true)}}
          >
              <IoMdMenu className="mt-[6px] h-1/2 w-8"/>
          </i>

          <div className={`${mobileDropDown ? 'flex' : 'hidden'} text-white absolute top-0 right-0 w-3/5 ssm:w-1/2 h-[100vh] flex-col justify-center bg-stone-800 z-20`}>
            <i 
              className={`absolute top-6 right-7 cursor-pointer`}
              onClick={() => {mobileDropDown ? setMobileDropDown(false) : setMobileDropDown(true)}}
            >
                <IoMdMenu className="h-8 w-8"/>
            </i>

            <ul
              className={`h-3/4 flex flex-col text-basemin font-medium`}
            >
                <li 
                    className="h-1/5 py-2 px-5" 
                    onClick={() => {
                        location("/ações");
                    }}
                >
                  Ações
                </li>
                <li 
                  className="h-1/5 py-2 px-5"
                  onClick={() => {
                    location("/fiis");
                  }}
                >
                  Fundos imobiliários
                </li>
                <li 
                  className="h-1/5 py-2 px-5"
                  onClick={() => {
                    location("/cripto");
                  }}
                >
                  Criptomoedas
                </li>
                <li 
                  className="h-1/5 py-2 px-5"
                  onClick={() => {
                    location("/rendafixa");
                  }}
                >
                  Renda Fixa
                </li>
                <li 
                  className="h-1/5 py-2 px-5"
                  onClick={() => {
                    location("/exterior");
                  }}
                >
                  Exterior
                </li>
                <li
                  className="h-1/5 py-2 px-5"
                  onClick={() => {
                    location("/carteira");
                  }}
                >
                      Carteira
                </li>
            </ul>
          </div>


          {/* Display >= 768px */}
          <ul className={`${color == 'branco' ? 'text-white' : 'text-zinc-700'} h-full w-max text-base font-medium hidden lg:flex items-center gap-4 pt-2 mr-5 relative`}>
            <li
              className={`cursor-pointer hover:text-zinc-400`}
              onClick={() => {
                location("/carteira");
              }}
            >
              Carteira
            </li>
            <li
              className="cursor-pointer hover:text-zinc-400 group"
              onMouseEnter={() => {setDesktopDropDown(true)}}
              onMouseLeave={() => {setDesktopDropDown(false)}}
            >
              Investimentos
            </li>

            <ul
              className={`${desktopDropDown ? 'block' : 'hidden'} ${color == 'branco' ? 'transparent' : 'bg-white z-20 border-[1px] border-black/25'} absolute top-8 right-[-39px] w-[86%] min-w-[150px] h-[200px] text-basemin rounded-lg`
              }
              onMouseEnter={() => {setDesktopDropDown(true)}}
              onMouseLeave={() => {setDesktopDropDown(false)}}
            >
                <li 
                  className="h-1/5 cursor-pointer hover:bg-black/20 px-2 rounded-md flex items-center"
                  onClick={() => {
                    location("/ações");
                  }}
                >
                  Ações
                </li>
                <li 
                  className="h-1/5 cursor-pointer hover:bg-black/20 px-2 rounded-md flex items-center"
                  onClick={() => {
                    location("/fiis");
                  }}
                >
                  Fundos imobiliários
                </li>
                <li 
                  className="h-1/5 cursor-pointer hover:bg-black/20 px-2 rounded-md flex items-center"
                  onClick={() => {
                    location("/cripto");
                  }}
                >
                  Criptomoedas
                </li>
                <li 
                  className="h-1/5 cursor-pointer hover:bg-black/20 px-2 rounded-md flex items-center"
                  onClick={() => {
                    location("/rendafixa");
                  }}
                >
                  Renda Fixa
                </li>
                <li 
                  className="h-1/5 cursor-pointer hover:bg-black/20 px-2 rounded-md flex items-center"
                  onClick={() => {
                    location("/exterior");
                  }}
                >
                  Exterior
                </li>
            </ul>
          </ul>
      </header>
  );
};

export default Cabecalho;
