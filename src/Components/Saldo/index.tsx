import { useState } from 'react';
import SaldoCarteira from "../SaldoCarteira";

const Saldo = () => {
      const [displaySaldo, setDisplaySaldo] = useState<'opacity-0' | 'opacity-100'>('opacity-0');

      return (
            <div className='w-full h-1/5 flex gap-3 justify-between'>
                        <SaldoCarteira
                              bg='sim'
                              titulo='Saldo atual'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-[35%] max-w-[420px]'
                        />

                        <SaldoCarteira
                              titulo='Saldo do mês anterior'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-[35%] max-w-[420px]'
                        />
                        
                        <SaldoCarteira
                              titulo='Rendimento do mês'
                              displaySaldo={displaySaldo}
                              setDisplaySaldo={setDisplaySaldo}
                              width='w-[35%] max-w-[420px]'
                        />
            </div>
      );
}

export default Saldo;