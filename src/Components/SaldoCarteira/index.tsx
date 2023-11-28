import {BsEyeSlashFill} from 'react-icons/bs';

type SaldoCarteiraProps = {
  bg?: 'sim' | 'não';
  titulo: string;
  saldo?: string;

  displaySaldo: 'hidden' | 'block';
  setDisplaySaldo: React.Dispatch<React.SetStateAction<'hidden' | 'block'>>;
  width?: string;
}

const SaldoCarteira = ({ bg='não', titulo, saldo='0,00', displaySaldo, setDisplaySaldo, width='w-[27%]'  }: SaldoCarteiraProps) => {
  

  return (
    <div className={`${width} h-full flex flex-col rounded-md border-2 border-zinc-200 p-4 ${bg == 'sim' ? 'bg-blue-600 text-zinc-50' : 'bg-white'}`}>
            <div className='w-full h-1/2 flex justify-between'>
              <div>
                <h3 className='text-base font-ptsans'> { titulo } </h3>
                <h3 className='text-lg font-hind flex'>R$ <span className={`${displaySaldo} ml-1`}>{saldo}</span></h3>
              </div>

              <i 
                className='w-7 h-7 mt-1 mr-1 cursor-pointer p-1 rounded-full hover:scale-125 transition-all duration-300'
                onClick={() => {displaySaldo == 'block' ? setDisplaySaldo('hidden') : setDisplaySaldo('block')}}
              >
                <BsEyeSlashFill className="w-full h-full" />
              </i>
            </div>
    </div>
  )
}

export default SaldoCarteira;