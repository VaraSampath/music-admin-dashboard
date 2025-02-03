import { ScrollArea } from "@/components/ui/scroll-area";
import Metrics from "./metrics";
import RecentStreams from "./recent-streams";
import UserChart from "./user-chart";
import RevenueChart from "./revenue-chart";
import TopSongsChart from "./top-songs-chart";
import RecentStreamTable from "./react-stream-table";

const Dashboard = () => {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="flex-1 p-10 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">Recent Streams</h1>
          <RecentStreams />
          <h1 className="font-semibold">Overview</h1>
          <Metrics />
          <UserChart />
          <div className="flex flex-col md:flex-row ">
            <RevenueChart />
            <TopSongsChart />
          </div>
          <h1 className="font-semibold">Streams</h1>
          <RecentStreamTable />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Dashboard;
