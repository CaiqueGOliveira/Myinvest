import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoRoscaCarteira = () => {

    const data = {
        labels: ['Ações', 'Fundos Imobiliários', 'Criptomoedas', 'Renda Fixa', 'Exterior'],
        datasets: [
            {
                label: 'Porcentagem% na carteira',
                data: [40, 40, 30, 20, 10],
                backgroundColor: [
                    'rgba(80, 200, 100, 0.8)',
                    'rgba(255, 140, 20, 0.8)',
                    'rgba(255, 206, 49, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                ],
                borderColor: [
                    'rgba(80, 200, 100, 0.8)',
                    'rgba(255, 140, 20, 0.8)',
                    'rgba(255, 206, 49, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div style={{ width: '90%', height: '90%' }}>
            <Doughnut 
                data={data} 
                options={options}
            />
        </div>
    )
}

export default GraficoRoscaCarteira;