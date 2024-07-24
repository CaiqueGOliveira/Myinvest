import { Table } from "react-bootstrap";

type ListaProps = {
      Titulo: string;
      children: React.ReactNode;
      tipoDaPagina: string;
}

const ListagemAtivos = ({Titulo, children, tipoDaPagina }: ListaProps) => {
  return (
      <div className="w-full h-2/3 rounded-md border-1 bg-white border-zinc-300 shadow-md flex flex-col px-4 py-6 gap-4">
            <div className="flex justify-between items-center">
                  <h3 className="font-semibold font-ptsans">{Titulo}</h3>

                  <button className="btn btn-primary">
                        Adicionar {tipoDaPagina}
                  </button>
            </div>

            <div className="table-container w-full overflow-y-scroll rounded-md border-[1px] max-h-[450px] xl:max-h-[800px]">
                  <Table responsive hover className="table m-0 w-full rounded-md h-max">
                        {children}
                  </Table>
            </div>
      </div>
  )
}

export default ListagemAtivos;