import DivisaoGrafico from "../DivisaoGrafico";




const DivisaoAtivos = () => {
  return (
      <div className="w-[37%] h-[95%] bg-white rounded-md border-zinc-300 border-2 p-5">
          <div className="w-full h-1/5">
            <h3 className="text-lg font-ptsans">Investimentos</h3>
            
            <p className="text-base font-hind text-zinc-500">Destribuição de ativos na carteira</p>
          </div>

          <div className="w-full h-4/5 flex">
              <div className="w-2/5 flew flex-col text-base">
                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Ações</p>
                    <p className="text-lime-500 font-medium">40%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Fundos Imobiliários</p>
                    <p className="text-orange-600 font-medium">40%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Criptomoedas</p>
                    <p className="text-yellow-400 font-medium">40%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Renda Fixa</p>
                    <p className="text-blue-500 font-medium">20%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Exterior</p>
                    <p className="text-violet-500 font-medium">0%</p>
                  </div>
              </div>

              <div className="w-3/5 h-full flex justify-center items-center">
                  <DivisaoGrafico 
                    acaoDeg={{começo: 0, fim: 30}}
                    fiisDeg={{começo: 30, fim: 60}}
                    criptoDeg={{começo: 60, fim: 90}}
                    rendafixaDeg={{começo: 90, fim: 100}}
                    exteriorDeg={{começo: 100, fim: 100}}
                  />
              </div>
          </div>
      </div>
  )
}

export default DivisaoAtivos;