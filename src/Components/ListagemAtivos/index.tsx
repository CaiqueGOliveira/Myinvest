type ListaProps = {
      Titulo: string;
      children: React.ReactNode;
}


const ListagemAtivos = ({Titulo, children}: ListaProps) => {
  return (
      <div className="w-[49%] h-[95%] rounded-md border-2 bg-white border-zinc-300 flex flex-col justify-center px-5 gap-2">
            <h3 className="self-start font-ptsans">{Titulo}</h3>

            <div className="w-full h-5/6 rounded-md border-2 border-zinc-300">
                  <table className="w-full h-full">
                        {children}
                  </table>
            </div>
      </div>
  )
}

export default ListagemAtivos