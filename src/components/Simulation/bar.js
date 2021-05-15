import React from "react";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    country: "AD",
    "hot dog": 183,
    "hot dogColor": "hsl(243, 70%, 50%)",
    burger: 138,
    burgerColor: "hsl(176, 70%, 50%)",
    sandwich: 136,
    sandwichColor: "hsl(297, 70%, 50%)",
    kebab: 26,
    kebabColor: "hsl(126, 70%, 50%)",
    fries: 36,
    friesColor: "hsl(237, 70%, 50%)",
    donut: 182,
    donutColor: "hsl(306, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 111,
    "hot dogColor": "hsl(152, 70%, 50%)",
    burger: 135,
    burgerColor: "hsl(1, 70%, 50%)",
    sandwich: 132,
    sandwichColor: "hsl(272, 70%, 50%)",
    kebab: 50,
    kebabColor: "hsl(336, 70%, 50%)",
    fries: 174,
    friesColor: "hsl(267, 70%, 50%)",
    donut: 5,
    donutColor: "hsl(356, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 4,
    "hot dogColor": "hsl(247, 70%, 50%)",
    burger: 0,
    burgerColor: "hsl(222, 70%, 50%)",
    sandwich: 87,
    sandwichColor: "hsl(34, 70%, 50%)",
    kebab: 76,
    kebabColor: "hsl(11, 70%, 50%)",
    fries: 194,
    friesColor: "hsl(105, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(216, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 163,
    "hot dogColor": "hsl(291, 70%, 50%)",
    burger: 25,
    burgerColor: "hsl(243, 70%, 50%)",
    sandwich: 22,
    sandwichColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(0, 70%, 50%)",
    fries: 187,
    friesColor: "hsl(95, 70%, 50%)",
    donut: 3,
    donutColor: "hsl(355, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 86,
    "hot dogColor": "hsl(233, 70%, 50%)",
    burger: 108,
    burgerColor: "hsl(300, 70%, 50%)",
    sandwich: 43,
    sandwichColor: "hsl(315, 70%, 50%)",
    kebab: 48,
    kebabColor: "hsl(174, 70%, 50%)",
    fries: 47,
    friesColor: "hsl(77, 70%, 50%)",
    donut: 103,
    donutColor: "hsl(206, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 163,
    "hot dogColor": "hsl(319, 70%, 50%)",
    burger: 12,
    burgerColor: "hsl(295, 70%, 50%)",
    sandwich: 30,
    sandwichColor: "hsl(148, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(31, 70%, 50%)",
    fries: 194,
    friesColor: "hsl(231, 70%, 50%)",
    donut: 194,
    donutColor: "hsl(335, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 192,
    "hot dogColor": "hsl(292, 70%, 50%)",
    burger: 112,
    burgerColor: "hsl(209, 70%, 50%)",
    sandwich: 95,
    sandwichColor: "hsl(222, 70%, 50%)",
    kebab: 131,
    kebabColor: "hsl(326, 70%, 50%)",
    fries: 114,
    friesColor: "hsl(6, 70%, 50%)",
    donut: 76,
    donutColor: "hsl(103, 70%, 50%)",
  },
];

const bar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.2}
    innerPadding={1}
    groupMode="grouped"
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
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
