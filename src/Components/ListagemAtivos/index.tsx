import { useState } from "react";
import { Table } from "react-bootstrap";
import { VscEmptyWindow } from "react-icons/vsc";
import ModalPesquisaAtivos from "../ModalPesquisaAtivos";

type ListaProps = {
      Titulo: string;
      children: React.ReactNode;
      tipoDaPagina: string;
      listaLength: number;
}

const ListagemAtivos = ({Titulo, children, tipoDaPagina, listaLength }: ListaProps) => {
      const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

      const openModal = () => {
            setModalIsOpen(true);
      };
      
      const closeModal = () => {
            setModalIsOpen(false);
      };

      return (
            <div className="w-full h-full rounded-md border-1 text-white bg-neutral-900 border-zinc-500 flex flex-col px-3 py-3 gap-4">
                  <div className="flex justify-between items-center">
                        <h3 className="font-semibold font-ptsans">{Titulo}</h3>

                        <button 
                              className="btn bg-blue-600 hover:bg-blue-800 text-white transition-all"
                              onClick={openModal}
                        >
                              Adicionar {tipoDaPagina}
                        </button>
                  </div>

                  <div className={`flex flex-col table-container w-full h-full overflow-y-auto rounded-md border-[1px] border-neutral-500 max-h-[450px] xl:max-h-[800px]`}>
                        <Table responsive hover borderless className="m-0 w-full rounded-md h-max">
                              {children}
                        </Table>

                        <div className={`${listaLength == 0 ? 'flex' : 'hidden'} w-full h-4/5 flex-col justify-center items-center`}>
                              <h4 className="text-xl font-ptsans">
                                    Lista vazia
                              </h4>
                              <p className="text-sm text-neutral-300 font-ptsans">
                                    Adicione ações a sua carteira
                              </p>
                              <i className="text-4xl mt-3 text-neutral-300">
                                    <VscEmptyWindow />
                              </i>
                        </div>
                  </div>

                  <ModalPesquisaAtivos 
                        closeModal={closeModal}
                        modalIsOpen={modalIsOpen}
                  />
            </div>
      )
}

export default ListagemAtivos;