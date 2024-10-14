import { RiSettingsLine } from "react-icons/ri";
import PerfilUsuario from "../PerfilUsuario";

type CabecalhoPrincipalProps = {
      titulo: string;
}

const CabecalhoPrincipal = ({ titulo }: CabecalhoPrincipalProps) => {
  return (
      <section className="w-full max-w-7xl h-[10%] flex justify-between items-center border-b-[1px] border-zinc-500">
            <h4 className="text-xl text-white font-semibold font-ptsans"> { titulo } </h4>
      
            <div className="w-max h-full flex items-center gap-5">
                  <i className="cursor-pointer p-1 text-white rounded-full hover:bg-neutral-600">
                        <RiSettingsLine className="w-6 h-6"/>
                  </i>
                  
                  <PerfilUsuario />
            </div>
      </section>
  )
}

export default CabecalhoPrincipal;