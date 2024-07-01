

type GraficoProps = {
  width?: string;
  height?: string;
  bg?: string;
}

const GraficoCarteira = ({ width='w-full', height='h-1/2', bg='' }: GraficoProps) => {
  return (
      <div className={`${width} ${height} ${bg} rounded-md border-zinc-300 border-2`}>
            <p>HOPEEEEEE</p>
      </div>
  )
}

export default GraficoCarteira;