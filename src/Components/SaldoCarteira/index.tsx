import {BsEyeSlashFill} from 'react-icons/bs';

type SaldoCarteiraProps = {
  bg?: 'sim' | 'não';
  titulo: string;
  saldo?: string;

  displaySaldo: 'opacity-0' | 'opacity-100';
  setDisplaySaldo: React.Dispatch<React.SetStateAction<'opacity-0' | 'opacity-100'>>;
  width?: string;
  height?: string;
}

const SaldoCarteira = ({ bg='não', titulo, saldo='0,00', displaySaldo, setDisplaySaldo, width='w-[27%]', height='h-full'}: SaldoCarteiraProps) => {
  

  return (
    <div className={`${width} ${height} flex flex-col rounded-md border-[1px] border-zinc-500 ${bg == 'sim' ? 'bg-neutral-100 text-black border-none' : 'bg-neutral-900 text-white'}`}>
            <div className='w-full h-1/2 flex justify-between p-4'>
                <div className='h-full'>
                  <h3 className='text-base font-ptsans font-semibold'> 
                    { titulo }
                  </h3>
                  
                  <h3 className='mt-2 text-2xl font-hind flex'>
                    R$ <span className={`${displaySaldo} ml-1 transition-all duration-100`}>{saldo}</span>
                  </h3>
                </div>

                <i 
                  className='w-7 h-7 mt-1 mr-1 cursor-pointer p-1 rounded-full hover:scale-125 transition-all duration-300'
                  onClick={() => {displaySaldo == 'opacity-100' ? setDisplaySaldo('opacity-0') : setDisplaySaldo('opacity-100')}}
                >
                  <BsEyeSlashFill className="w-full h-full" />
                </i>
            </div>
    </div>
  )
}

export default SaldoCarteira;