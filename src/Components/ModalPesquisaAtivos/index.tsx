import Modal from 'react-modal';

import { AiOutlineStock } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios';

interface modalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

const ModalPesquisaAtivos = ({modalIsOpen, closeModal}: modalProps) => {

    const [inputPesquisa, setInputPesquisa] = useState<string>('');

    const alteraInput = (value: string) => {
        setInputPesquisa(value);

        requisicaoPesquisa(value);
    }

    const requisicaoPesquisa = async (symbol: string) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=G6INWHKJ7C8B1K0B`)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='teste'
            style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.75)',
                    },
                    content: {
                        width: '50%',
                        maxWidth: '540px',
                        height: '80%',
                        maxHeight: '680px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        padding: '24px',
                        backgroundColor: '#111111',
                        border: 'none',
                    }
            }}
        >
            <div className="w-full h-1/6 relative">
                    <input
                        className="w-4/5 h-12 rounded-tl-md bg-neutral-50 placeholder:text-neutral-500 border-[1px] border-neutral-400 px-3 focus:outline-none font-ptsans relative"
                        type="text" 
                        placeholder="Pesquise por uma ação"
                        value={inputPesquisa}
                        onChange={(e) => {
                            setInputPesquisa(e.target.value);
                        }}
                    />
                    <button className="w-1/5 h-12 rounded-tr-md text-white bg-blue-600 hover:bg-blue-400 border-y-[1px] border-r-[1px] border-neutral-400 transition-all duration-300 font-ptsans">
                        Buscar
                    </button>

                    <ul className="absolute w-full h-max rounded-b-md overflow-hidden">
                        <li className="w-full h-12 flex items-center border-y-[1px] border-neutral-300 bg-neutral-50 hover:bg-neutral-200 px-3 font-ptsans cursor-pointer transition-all">
                                Testando
                        </li>
                    </ul>
            </div>

            <div className="w-full h-5/6 bg-neutral-900 rounded-md">
                    <div className="w-full h-full flex flex-col justify-center items-center text-white">
                        <h4 className="text-xl font-ptsans">
                                Informações Técnicas
                        </h4>
                        <p className="text-sm font-ptsans text-neutral-300">
                                Pesquise por uma Ação
                        </p>
                        <i className="text-6xl text-neutral-400 mt-2">
                                <AiOutlineStock />
                        </i>
                    </div>
            </div>
        </Modal>
    )
}

export default ModalPesquisaAtivos;