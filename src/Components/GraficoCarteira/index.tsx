import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  LineController, 
  LineElement, 
  PointElement, 
  ChartOptions, 
  ChartData, 
  CategoryScale, 
  LinearScale,
  Filler
} from 'chart.js';
import { useEffect, useState } from "react";

ChartJS.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Filler);

type GraficoProps = {
  width?: string;
  height?: string;
  bg?: string;
  marginTexto?: string;
  valores: number[]
}

const GraficoCarteira = ({ width='w-full', height='h-1/2', bg='', marginTexto='', valores }: GraficoProps) => {

  const [labels, setLabels] = useState<string[]>(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']);

  useEffect(() => {
    let listaAtualizada = [];

    const limiteLabel = valores.length;

    listaAtualizada = labels.filter((mes, index) => {
      if (limiteLabel > index) {
        return mes;
      }
    });

    setLabels(listaAtualizada);
  }, [valores]);

  const data: ChartData<'line'> = {
    labels: labels,
    datasets: [
      {
        label: 'Saldo da carteira',
        data: valores,
        backgroundColor: 'rgba(30, 180, 10, 0.1)',
        borderColor: 'rgba(30, 180, 10, 0.8)',
        borderWidth: 1,
        borderDash: [0],
        pointBorderWidth: 1,
        tension: 0.4,
        fill: true,
      }
    ]
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            size: 10
          }
        }          
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
          font: {
            size: 11
          },
          callback: function(value) {
            return `${value}k`;
          }
        }
      },
    },
  }

  return (
      <div className={`${width} ${height} ${bg} text-white border-zinc-500 flex-col rounded-md border-[1px] pt-3 px-3`}>
          <div className={`flex flex-col ${marginTexto}`}>
            <h3 className="font-semibold font-ptsans leading-3">
              Progressão
            </h3>
            <p className="text-sm font-semibold text-zinc-300">
              Evolução mensal da carteira
            </p>
          </div>

          <div className="w-full h-3/4">
            <Line data={data} options={options}/>
          </div>
      </div>
  )
}

export default GraficoCarteira;