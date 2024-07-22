import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

type GraficoProps = {
  width?: string;
  height?: string;
  bg?: string;
}

const GraficoCarteira = ({ width='w-full', height='h-1/2', bg='' }: GraficoProps) => {

    const data: ChartData<'bar'> = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agos', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        {
          label: 'Saldo da carteira',
          data: [1, 3, 6, 4, 13, 22, 48],
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
        <div className={`${width} ${height} ${bg} flex-col gap-3 rounded-md border-zinc-300 border-2 pt-3 px-3`}>
            <div className="flex flex-col mb-4">
              <h3 className="text-base font-ptsans ">
                Progressão
              </h3>
              <p className="text-sm text-zinc-400">
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