"use client";

import { Loader } from "lucide-react";
import { useQuery } from "react-query";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const TopSongsChart = () => {
  const getTop5 = async (): Promise<
    {
      song: string;
      artist: string;
      streams: number;
    }[]
  > => {
    const response = await fetch("http://localhost:5000/topStreamedSongs");
    return response.json();
  };

  const query = useQuery({
    queryKey: ["Top5"],
    queryFn: getTop5,
  });
  if (query.isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );
  }
  return (
    <div className=" w-80 md:w-full mt-12 flex-1 flex-shrink-0  flex">
      <ResponsiveContainer
        width="100%"
        height={500}
      >
        <BarChart
          width={200}
          height={300}
          data={query.data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="artist" />
          <YAxis dataKey={"streams"} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="streams"
            fill="#8884d8"
            activeBar={
              <Rectangle
                fill="pink"
                stroke="blue"
              />
            }
          />
          <Bar
            dataKey="song"
            fill="#82ca9d"
            activeBar={
              <Rectangle
                fill="gold"
                stroke="purple"
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopSongsChart;
