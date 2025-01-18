import React, { useMemo } from "react";
import * as d3 from "d3";

const MARGIN_X = 150;
const MARGIN_Y = 50;
const INFLEXION_PADDING = 20;

const colors = ["#62F0FE", "#186E76", "#0A99A6"];

const Donut = ({ width, height, data }) => {
  // Calculate radius and inner radius
  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;
  const innerRadius = radius / 1.5;

  // Pie chart generator with memoization for performance
  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value).padAngle(.5);
    return pieGenerator(data);
  }, [data]);

  // Arc generator
  const arcGenerator = d3.arc();

  // Shapes for pie chart segments and labels
  const shapes = pie.map((grp, i) => {
    // Donut slice path
    const sliceInfo = {
      innerRadius,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // Inflexion point for labels
    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    // Label positioning logic
    const isRightLabel = inflexionPoint[0] > 0;
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = grp.data.name + " (" + grp.value + "%"+")";
    // const label = `(${grp.value}%)`;
    return (
      <g key={i}>
        <path d={slicePath} fill={colors[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke="white"
          fill="white"
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke="white"
          fill="white"
        />
     <text
  x={labelPosX + (isRightLabel ? 2 : -2)}
  y={inflexionPoint[1]}
  textAnchor={textAnchor}
  dominantBaseline="middle"
  fontSize={14}
  fill="white"
>
  {label}
</text>

      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2 - 60})`}>
        {shapes}
      </g>
    </svg>
  );
};

export default Donut;
