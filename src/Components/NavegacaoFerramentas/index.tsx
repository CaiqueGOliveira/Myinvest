import "./navegacaoFerramentas.css";

import { IoOptionsOutline } from "react-icons/io5";
import { SiTestcafe } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaCodeCompare } from "react-icons/fa6";
import { useState } from "react";

const NavegacaoFerramentas = () => {

    const [displayIconTools, setDisplayIconTools] = useState<boolean>(false);

    return (
        <div className="w-full h-full flex items-center gap-2 text-white">
            <span className="text-xl text-white font-semibold font-ptsans ml-3 mr-1"> - </span>

            <div className="w-6 h-6">
                <IoOptionsOutline
                    className={`${displayIconTools ? 'deita' : 'levanta'} -rotate-90 rounded-full text-2xl text-white cursor-pointer transition-all duration-500`}
                    onClick={() => {
                        setDisplayIconTools(displayIconTools ? false : true);
                    }}
                />
            </div>

            <div className="w-full h-full overflow-hidden flex items-center">
                <div className={`${displayIconTools ? 'slideRight' : 'slideLeft'} w-full flex items-center gap-2 transition-transform duration-500 ease-linear`}>
                    <div className="flex items-center gap-2 px-2 pb-1 border-b-[1px] border-zinc-400 cursor-pointer transition-all hover:border-b-2 hover:border-zinc-100 hover:scale-105">
                            <i className="scale-125">
                                <SiTestcafe />
                            </i>
                            <p className="font-ptsans text-sm ml-1 whitespace-nowrap">
                                Simulador
                            </p>
                    </div>
                    <div className="flex items-center gap-2 px-2 pb-1 border-b-[1px] border-zinc-400 cursor-pointer transition-all hover:border-b-2 hover:border-zinc-100 hover:scale-105">
                            <i className="scale-125">
                                <TbBrandGoogleAnalytics />
                            </i>
                            <p className="font-ptsans text-sm ml-1 whitespace-nowrap">
                                Análise fundamentalista
                            </p>
                    </div>
                    <div className="flex items-center gap-2 px-2 pb-1 border-b-[1px] border-zinc-400 cursor-pointer transition-all hover:border-b-2 hover:border-zinc-100 hover:scale-105">
                            <i className="scale-125">
                                <FaCodeCompare />
                            </i>
                            <p className="font-ptsans text-sm ml-1 whitespace-nowrap">
                                Comparar Ações
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavegacaoFerramentas;