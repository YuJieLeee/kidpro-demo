import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = Array.from({ length: 1000 }, (_, i) => `Data-${i + 1}`);

const cities = [
  "london",
  "paris",
  "newYork",
  "seoul",
  "tokyo",
  "sydney",
  "moscow",
  "beijing",
  "mumbai",
  "cairo",
];

const dataset = labels.flatMap((month) => {
  return Array.from({ length: 1 }, () => {
    const data: { [key: string]: any } = { month };
    cities.forEach((city: string) => {
      data[city] = faker.number.int({ min: 20, max: 400 });
    });
    return data;
  });
});

const generateDataset = () => {
  return cities.map((city) => ({
    label: city,
    data: dataset.filter((d) => d[city] !== undefined).map((d) => d[city]),
    backgroundColor: faker.color.rgb(),
    borderColor: faker.color.rgb(),
    borderWidth: 1,
  }));
};
const datasets = generateDataset();

export default function ChartjsBar() {
  return (
    <Bar
      datasetIdKey="id"
      options={{
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      }}
      data={{
        labels,
        datasets,
      }}
    />
  );
}
