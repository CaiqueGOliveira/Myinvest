import { RiArrowDropDownLine } from "react-icons/ri";
import './fotoUsuario.css';


const PerfilUsuario = () => {
  return (
      <div className="w-max h-max flex items-center">
            <div className="w-12 h-12 rounded-full mr-2 fotoUsuario"></div>
            
            <div className="h-6 flex cursor-pointer border-black/70 hover:border-b-[1px]">
                  <p className="font-hind "> Caique </p>
                  <i><RiArrowDropDownLine className="w-7 h-7" /></i>
            </div>
      </div>
  )
}

export default PerfilUsuario