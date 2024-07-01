import { useState } from 'react';
import SaldoCarteira from "../SaldoCarteira";

const Saldo = () => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <div className='w-full h-[30%] flex justify-between'>
                  <SaldoCarteira 
                        bg='sim'
                        titulo='Saldo atual'
                        displaySaldo={displaySaldo}
                        setDisplaySaldo={setDisplaySaldo}
                  />
                  <SaldoCarteira 
                        titulo='Saldo do mês anterior'
                        displaySaldo={displaySaldo}
                        setDisplaySaldo={setDisplaySaldo}
                  />
                  <SaldoCarteira 
                        titulo='Rendimento do mês'
                        displaySaldo={displaySaldo}
                        setDisplaySaldo={setDisplaySaldo}
                  />
            </div>
      );
}

export default Saldo;