import Modal from 'react-modal';

import { AiOutlineStock } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios';

Modal.setAppElement('#root');

interface modalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
}

interface Acao {
    '1. symbol': string,
    '2. name': string,
    '3. type': string,
    '4. region': string,
    '5. marketOpen': string,
    '6. marketClose': string,
    '7. timezone': string,
    '8. currency': string,
    '9. matchScore': string,
}

interface Ocorrencia {
    bestMatches: Acao[];
}

const ModalPesquisaAtivos = ({modalIsOpen, closeModal}: modalProps) => {

    const [inputPesquisa, setInputPesquisa] = useState<string>('');
    const [ocorrencias, setOcorrencias] = useState<Ocorrencia>({bestMatches: []});
    const [acao, setAcao] = useState<Acao[]>([]);

    const alteraInput = (value: string) => {
        setInputPesquisa(value);

        requisicaoPesquisa(value);
    }

    const requisicaoPesquisa = async (keyword: string) => {
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=G6INWHKJ7C8B1K0B`)
        .then(response => {
            setOcorrencias(response.data.bestMatches ? response.data : { bestMatches: [] });
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
                        backgroundColor: '#181818',
                        border: 'none',
                    }
            }}
        >
            <div className="w-full h-[8%] relative">
                    <input
                        className={`w-4/5 h-10 ${ocorrencias.bestMatches.length > 0 ? 'rounded-tl-md' : 'rounded-l-md'}  bg-neutral-50 placeholder:text-neutral-500 border-[1px] border-neutral-400 px-3 focus:outline-none font-ptsans relative`}
                        type="text" 
                        placeholder="Pesquise por uma ação"
                        value={inputPesquisa}
                        onChange={(e) => {
                            alteraInput(e.target.value);
                        }}
                    />
                    <button className={`w-1/5 h-10 ${ocorrencias.bestMatches.length > 0 ? 'rounded-tr-md' : 'rounded-r-md'} text-white bg-blue-600 hover:bg-blue-400 border-y-[1px] border-r-[1px] border-neutral-400 transition-all duration-300 font-ptsans`}>
                        Buscar
                    </button>

                    <ul className="absolute w-full h-max rounded-b-md overflow-hidden">
                        {
                            ocorrencias.bestMatches && ocorrencias.bestMatches.length > 0 &&
                            ocorrencias.bestMatches.map((res, index) => (
                                <li 
                                    key={index}
                                    className="w-full h-12 flex items-center border-y-[1px] border-neutral-300 bg-neutral-50 hover:bg-neutral-200 px-3 font-ptsans text-sm cursor-pointer transition-all"
                                    onClick={() => {
                                        setAcao([res]);
                                    }}
                                >
                                    {res['1. symbol']} - {res['2. name']} - {res['4. region']}
                                </li>
                            ))
                        }
                    </ul>
            </div>

            <div className="w-full h-[92%] border-[1px] border-neutral-700 rounded-md">
                    <div className="w-full h-full flex flex-col justify-center items-center text-white">
                        <h4 className="text-xl font-ptsans">
                                Informações Técnicas
                        </h4>
                        <p 
                            className="text-sm font-ptsans text-neutral-300"
                        >
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