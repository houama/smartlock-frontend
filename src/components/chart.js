import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Booking Counter",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
