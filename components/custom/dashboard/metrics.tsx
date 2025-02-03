"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  DollarSign,
  Loader,
  Mic2,
  Music2Icon,
  Users,
  Users2Icon,
} from "lucide-react";
import { useQuery } from "react-query";
import MetricCard from "./metric-card";

type Metrics = {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
};

const Metrics = () => {
  const getMetrics = async (): Promise<Metrics> => {
    const response = await fetch(
      "https://music-dashboard-be.vercel.app/metrics"
    );
    return response.json();
  };

  const query = useQuery({
    queryKey: ["Metrics"],
    queryFn: getMetrics,
  });
  if (query.isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex">
      <ScrollArea className="w-1 flex-1 ">
        <div className="flex gap-5  w-80 md:w-full">
          <MetricCard
            icon={<Users color="white" />}
            tagline="Total Users"
            value={query.data?.totalUsers ?? 0}
            bgColorClass="bg-[#4749A0]"
            tagLineColorClass="text-[#4749A0]"
          />
          <MetricCard
            icon={<Users2Icon color="white" />}
            tagline="Active Users"
            value={query.data?.activeUsers ?? 0}
            bgColorClass="bg-[#24BEB7]"
            tagLineColorClass="text-[#24BEB7]"
          />
          <MetricCard
            icon={<Music2Icon color="white" />}
            tagline="Total Streams"
            value={query.data?.totalStreams ?? 0}
            bgColorClass="bg-[#9C56FE]"
            tagLineColorClass="text-[#9C56FE]"
          />
          <MetricCard
            icon={<DollarSign color="white" />}
            tagline="Total Revenue"
            value={query.data?.revenue ?? 0}
            bgColorClass="bg-[#FC61B0]"
            tagLineColorClass="text-[#FC61B0]"
          />
          <MetricCard
            icon={<Mic2 color="white" />}
            tagline="Top Artist"
            value={query.data?.topArtist ?? ""}
            bgColorClass="bg-[#FC61B0]"
            tagLineColorClass="text-[#FC61B0]"
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Metrics;
