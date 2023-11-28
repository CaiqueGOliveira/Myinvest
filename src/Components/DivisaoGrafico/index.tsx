type GraficoProps = {
      acaoDeg: {começo: number, fim: number};
      fiisDeg: {começo: number, fim: number};
      criptoDeg: {começo: number, fim: number};
      rendafixaDeg: {começo: number, fim: number};
      exteriorDeg: {começo: number, fim: number};
}


const DivisaoGrafico = ({ acaoDeg, fiisDeg, criptoDeg, rendafixaDeg, exteriorDeg }: GraficoProps) => {
      const acoes: {cor: string, começo: string, fim: string} = {
            cor: '#83cc16',
            começo: `${3.6 * acaoDeg.começo}deg`,
            fim: `${3.6 * acaoDeg.fim}deg`
      };

      const fiis: {cor: string, começo: string, fim: string} = {
            cor: '#ea440c',
            começo: `${3.6 * fiisDeg.começo}deg`,
            fim: `${3.6 * fiisDeg.fim}deg`
      };

      const cripto: {cor: string, começo: string, fim: string} = {
            cor: '#facc15',
            começo: `${3.6 * criptoDeg.começo}deg`,
            fim: `${3.6 * criptoDeg.fim}deg`
      };

      const rendafixa: {cor: string, começo: string, fim: string} = {
            cor: '#3b83f6',
            começo: `${3.6 * rendafixaDeg.começo}deg`,
            fim: `${3.6 * rendafixaDeg.fim}deg`
      };

      const exterior: {cor: string, começo: string, fim: string} = {
            cor: '#8b5cf6',
            começo: `${3.6 * exteriorDeg.começo}deg`,
            fim: `${3.6 * exteriorDeg.fim}deg`
      };

      return (
            <div 
                  className="w-44 h-44 xl:w-56 xl:h-56 flex justify-center items-center rounded-full relative border-2 border-zinc-300
                  before:content-[''] before:absolute before:w-3/4 before:h-3/4 before:bg-white before:rounded-full
                  bg-slate-200"

                  style={
                        { 
                              background: `conic-gradient(${acoes.cor} ${acoes.começo}, ${acoes.cor} ${acoes.fim}, ${fiis.cor} ${fiis.começo}, ${fiis.cor} ${fiis.fim}, ${cripto.cor} ${cripto.começo}, ${cripto.cor} ${cripto.fim}, ${rendafixa.cor} ${rendafixa.começo}, ${rendafixa.cor} ${rendafixa.fim}, ${exterior.cor} ${exterior.começo}, ${exterior.cor} ${exterior.fim})`
                        }
                  }
            >
                  <p className="text-basemin font-ptsans font-medium relative">Carteira de Ativos</p>
            </div>
      )
}

export default DivisaoGrafico