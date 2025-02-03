"use client";

import { useQuery } from "react-query";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type UsersByMonth = {
  month: string;
  totalUsers: number;
  activeUsers: number;
  id: string;
};

const UserChart = () => {
  const getUsersByMonth = async (): Promise<UsersByMonth[]> => {
    const response = await fetch("http://localhost:5000/userGrowth");
    return response.json();
  };

  const query = useQuery({
    queryKey: ["UsersByMonth"],
    queryFn: getUsersByMonth,
  });
  return (
    <div className=" mt-10  w-full">
      <ResponsiveContainer
        aspect={16 / 9}
        width="100%"
      >
        <LineChart
          data={query.data ?? []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
