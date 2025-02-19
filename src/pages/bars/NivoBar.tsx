// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const generateData = (numEntries: number) => {
  return Array.from({ length: numEntries }, () => ({
    country: faker.address.countryCode(),
    "hot dog": faker.number.int({ min: 0, max: 200 }),
    "hot dogColor": `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
    burger: faker.number.int({ min: 0, max: 200 }),
    burgerColor: `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
    sandwich: faker.number.int({ min: 0, max: 200 }),
    sandwichColor: `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
    kebab: faker.number.int({ min: 0, max: 200 }),
    kebabColor: `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
    fries: faker.number.int({ min: 0, max: 200 }),
    friesColor: `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
    donut: faker.number.int({ min: 0, max: 200 }),
    donutColor: `hsl(${faker.number.int({ min: 0, max: 360 })}, 70%, 50%)`,
  }));
};

const data = generateData(1000);

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    }
  />
);

export default function NivoBar() {
  return (
    <Box width="1000px" height="500px">
      <MyResponsiveBar />
    </Box>
  );
}
