

type GraficoProps = {
  width?: string;
  height?: string;
  bg?: string;
}

const GraficoCarteira = ({ width='w-3/5', height='h-[95%]', bg='' }: GraficoProps) => {
  return (
      <div className={`${width} ${height} ${bg} rounded-md border-zinc-300 border-2`}>
            
      </div>
  )
}

export default GraficoCarteira;