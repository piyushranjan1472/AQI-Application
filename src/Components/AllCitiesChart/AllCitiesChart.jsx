import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useStateValue } from "../../Context-management/StateProvider";
import { getColorCode } from "../../Helper-components/Utility/Utils";
import "./AllCitiesChart.scss"


class CustomizedXAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x + 15},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#4a797d"
          transform="rotate(-35)"
          fontSize={17}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}



export default function AllCitiesChart() {
  const [{ aqiData }] = useStateValue();

  const dataForBarChart = Object.entries(aqiData).map((entry) => {
    const [city, dataArr] = entry;
    const latestEntryAqi = dataArr[dataArr.length - 1].aqi;
    return { city, latestEntryAqi: Math.round(latestEntryAqi) };
  });

  return (
    <div className="chart_container">
      <h3>AQI level for different cities</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={1000}
          height={500}
          data={dataForBarChart}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 75,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="city"
            tick={<CustomizedXAxisTick />}
            minTickGap={0.5}
            axisLine={false}
            interval={0}
            tickMargin={2}
            label={{ value: 'Cities', fontSize: 20, fontWeight: 700, position: 'insideBottom', offset: -75, fill: "#4a797d" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            label={{ value: 'AQI-level', fontSize: 20, fontWeight: 700, angle: -90,position:"insideLeft", fill: "#4a797d" }}
            style={{
              fontSize: 17,
              fill: "#4a797d"
            }}
          />
          <Tooltip cursor={false} itemStyle={{ color: "black" }} />
          <Bar
            dataKey="latestEntryAqi"
            barSize={40}
            barGap={5}
            name="AQI-Level"
          >
            {dataForBarChart.map((entry, index) => {
              return <Cell key={`celldata-${index}`} fill={getColorCode(entry.latestEntryAqi)} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
