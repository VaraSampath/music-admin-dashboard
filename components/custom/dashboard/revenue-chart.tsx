"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useQuery } from "react-query";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

const RevenueChart = () => {
  const getRevenue = async (): Promise<
    {
      name: string;
      value: number;
    }[]
  > => {
    const response = await fetch("http://localhost:5000/revenueDistribution");
    return response.json();
  };

  const query = useQuery({
    queryKey: ["Revenue"],
    queryFn: getRevenue,
  });
  if (query.isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );
  }
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (query.data)
      return (
        <text
          x={x}
          y={y}
          fill="black"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}% `}
        </text>
      );
  };

  const colorConfig = {
    0: `bg-[#0088FE]`,
    1: `bg-[#00C49F]`,
  };

  return (
    <div className=" min-w-96 flex-shrink-1 flex flex-col md:gap-4 items-center justify-center ">
      <ResponsiveContainer
        width="100%"
        height={400}
      >
        <PieChart>
          <Pie
            data={query.data}
            dataKey="value"
            cx={150}
            cy={200}
            label={renderCustomizedLabel}
            innerRadius={80}
            outerRadius={100}
          >
            {query.data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        {query.data?.map((each, idx) => {
          return (
            <div
              className="flex gap-2"
              key={each.name}
            >
              <div
                className={cn(`size-5 rounded-full ${colorConfig[idx as 0]}`)}
              ></div>
              <p>{each.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueChart;
