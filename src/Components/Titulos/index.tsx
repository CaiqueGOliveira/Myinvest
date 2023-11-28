type TitulosProps =  {
      titulo: string;
      subtitulo: string;
      color: "preto" | "branco";
}

const Titulos = ({ titulo, subtitulo, color }: TitulosProps) => {
      return (
            <>
                  <h2 
                        className='text-[22px] text-center font-medium ssm:text-2.5xl sm:text-3xl' 
                        style={{color: `${color === "preto" ? "black" : "white"}`}}
                  >
                        {titulo}
                  </h2>

                  <h3 
                        className='text-base mt-1 w-11/12 text-center font-medium ssm:text-lg sm:text-xl sm:w-auto' 
                        style={{color: `${color === "preto" ? "black" : "white"}`}}
                  >
                        {subtitulo}
                  </h3>
            </>
      )
}

export default Titulos;