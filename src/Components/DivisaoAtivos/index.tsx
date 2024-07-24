import GraficoRoscaCarteira from "../GraficoRoscaCarteira";


type DivisaoAtivosProps = {
  width?: string;
  height?: string;
}



const DivisaoAtivos = ({ width="w-[30%] max-w-[380px]", height="h-full max-h-[380px]" }: DivisaoAtivosProps) => {
  return (
      <div className={`${width} ${height} bg-white rounded-md border-zinc-300 border-2`}>
          <div className="w-full h-1/5 flex flex-col justify-center px-4">
            <h3 className="font-ptsans font-semibold">
              Investimentos
            </h3>
            
            <p className="text-sm font-hind font-semibold text-zinc-400">Destribuição de ativos na carteira</p>
          </div>

          <div className="w-full h-4/5 flex px-4 pt-4">
              <div className="w-2/5 h-3/4 flew flex-col text-sm">
                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Ações</p>
                    <p className="text-green-500 font-medium">40%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Fundos Imobiliários</p>
                    <p className="text-orange-400 font-medium">40%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Criptomoedas</p>
                    <p className="text-yellow-500 font-medium">30%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Renda Fixa</p>
                    <p className="text-blue-400 font-medium">20%</p>
                  </div>

                  <div className="h-1/5 w-full flex flex-col">
                    <p className="font-hind">Exterior</p>
                    <p className="text-violet-400 font-medium">10%</p>
                  </div>
              </div>

              <div className="w-3/5 h-3/4 flex justify-center items-center">
                  <GraficoRoscaCarteira />
              </div>
          </div>
      </div>
  )
}

export default DivisaoAtivos;