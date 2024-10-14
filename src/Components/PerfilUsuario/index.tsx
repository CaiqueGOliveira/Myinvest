import { RiArrowDropDownLine } from "react-icons/ri";
import fotoUsuario from "../../Assets/neymar.jpeg";


const PerfilUsuario = () => {
  return (
      <div className="w-max h-max flex items-center">
            <img
                  className="w-12 h-12 rounded-full mr-2"
                  src={fotoUsuario}
                  alt="Foto do Usuário"
            />
            
            <div className="h-6 flex cursor-pointer border-black/70 hover:border-b-[1px] hover:border-white text-white">
                  <p className="font-hind"> 
                        Caique 
                  </p>

                  <i className="w-7 h-7">
                        <RiArrowDropDownLine />
                  </i>
            </div>
      </div>
  )
}

export default PerfilUsuario;