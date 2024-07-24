import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

type GraficoProps = {
  width?: string;
  height?: string;
  bg?: string;
  marginTexto?: string;
  valores: number[]
}

const GraficoCarteira = ({ width='w-full', height='h-1/2', bg='', marginTexto='', valores }: GraficoProps) => {

    const data: ChartData<'bar'> = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        {
          label: 'Saldo da carteira',
          data: valores,
          backgroundColor: [
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
            'rgba(30, 180, 10, 0.8)',
          ],
        }
      ]
    }

    const options: ChartOptions<'bar'> = {
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
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            callback: function(value) {
              return `${value}k`;
            }
          }
        },
      },
    }

    return (
        <div className={`${width} ${height} ${bg} flex-col rounded-md border-zinc-300 border-2 pt-4 px-4 min-h-[250px] shadow-md`}>
            <div className={`flex flex-col ${marginTexto}`}>
              <h3 className="font-semibold font-ptsans leading-3">
                Progressão
              </h3>
              <p className="text-sm font-semibold text-zinc-400">
                Evolução mensal da carteira
              </p>
            </div>

            <div className="w-full h-4/5">
              <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default GraficoCarteira;