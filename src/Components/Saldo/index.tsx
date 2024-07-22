import { useState } from 'react';
import SaldoCarteira from "../SaldoCarteira";

const Saldo = () => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <div className='w-full h-1/5 flex gap-5 justify-between'>
                        <SaldoCarteira
                              bg='sim'
                              titulo='Saldo atual'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-1/3 max-w-[380px]'
                        />

                        <SaldoCarteira
                              titulo='Saldo do mês anterior'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-1/3 max-w-[380px]'
                        />
                        
                        <SaldoCarteira
                              titulo='Rendimento do mês'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-1/3 max-w-[380px]'
                        />
            </div>
      );
}

export default Saldo;