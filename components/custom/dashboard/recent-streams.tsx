"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Loader } from "lucide-react";
import { useQuery } from "react-query";

export type MusicCardType = {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  id: string;
};

const RecentStreams = () => {
  const getRecentStreams = async (): Promise<MusicCardType[]> => {
    const response = await fetch("http://localhost:5000/recentStreams");
    return response.json();
  };

  const query = useQuery({
    queryKey: ["recentStreams"],
    queryFn: getRecentStreams,
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
        <div className="flex gap-5">
          {query.data?.map((data) => {
            return (
              <div
                key={data.id}
                className="relative shrink-0 flex-1 w-full min-w-64 flex flex-col gap-4"
              >
                <div className=" w-full aspect-video  bg-black text-white flex justify-center items-center">
                  placeholder image
                </div>
                <div className="flex flex-col">
                  <h1 className="text-primary-blue-200 font-semibold">
                    {data.songName}
                  </h1>
                  <p className="text-sm text-gray-500">
                    Artist:{" "}
                    <span className="text-primary-blue-200">{data.artist}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Last Streamed: {data.dateStreamed}
                  </p>
                  <p className="text-sm text-gray-500">
                    Stream count: {data.streamCount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RecentStreams;
