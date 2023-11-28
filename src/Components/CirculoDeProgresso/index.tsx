type CircleTypes = {
      tipo: string;
      width: string;
      height: string;
      textSize: string;
}

const CirculoDeProgresso = ({ tipo, width, height, textSize }: CircleTypes) => {

      const cores: {tipo: string, cor: string}[] = [
            {
                  tipo: 'Renda Fixa',
                  cor: '#60a5fa'
            },
            {
                  tipo: 'FIIs',
                  cor: '#9a3412'
            },
            {
                  tipo: 'Ações',
                  cor: '#22c55e'
            },
            {
                  tipo: 'Cripto',
                  cor: '#facc15'
            },
            {
                  tipo: 'Exterior',
                  cor: '#4e46e5'
            }
      ];

      function distribuiCor() {
            const investimento = cores.find(item => item.tipo === tipo);
            return investimento?.cor;
      }

      return (
            <div
                  className={`${width} ${height} scale-110 ssm:scale-125 border-black/10 border-[1px] flex items-center justify-center rounded-full relative before:content-[""] before:absolute before:w-3/4 before:h-3/4 before:bg-white before:rounded-full sm:scale-110`}
                  style={{background: `conic-gradient(${distribuiCor()} ${3.6 * 80}deg, #E9E9E9 0deg)`}}
            >
                  <h3 className={`relative ${textSize}`}>{ tipo }</h3>
            </div>
      );
}

export default CirculoDeProgresso;