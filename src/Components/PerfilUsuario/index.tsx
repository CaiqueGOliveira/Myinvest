import { RiArrowDropDownLine } from "react-icons/ri";
import fotoUsuario from "https://www.ofuxico.com.br/img/upload/noticias/2021/04/19/neymar-responde-que-esta-interessado-em-alguem-e-ainda-nao-desistiu-do-amor_401517_36.jpg";


const PerfilUsuario = () => {
  return (
      <div className="w-max h-max flex items-center">
            <img
                  className="w-12 h-12 rounded-full mr-2"
                  src={fotoUsuario}
                  alt="Foto do Usuário"
            />
            
            <div className="h-6 flex cursor-pointer border-black/70 hover:border-b-[1px]">
                  <p className="font-hind "> 
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