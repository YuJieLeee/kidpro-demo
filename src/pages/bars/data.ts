import { faker } from "@faker-js/faker";

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

const months = Array.from({ length: 100 }, (_, i) => `Data-${i + 1}`);

export const dataset = months.flatMap((month) => {
  return Array.from({ length: 1 }, () => {
    const data: { [key: string]: any } = { month };
    cities.forEach((city: string) => {
      data[city] = faker.number.int({ min: 20, max: 400 });
    });
    return data;
  });
});

export const series = cities.map((city) => ({
  dataKey: city,
  label: city,
  stack: "stack",
}));
