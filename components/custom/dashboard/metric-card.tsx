import { cn } from "@/lib/utils";

type metricCard = {
  icon: React.ReactNode;
  value: number | string;
  tagline: string;
  bgColorClass: string | undefined;
  tagLineColorClass: string | undefined;
};
const MetricCard = ({
  icon,
  value,
  tagline,
  bgColorClass,
  tagLineColorClass,
}: metricCard) => {
  return (
    <div className="bg-white p-9 flex  gap-4 items-center">
      <div
        className={cn(
          "bg-rose-500 flex-shrink-0 relative size-16 rounded-full ",
          bgColorClass
        )}
      >
        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" font-bold text-2xl">
          {typeof value === "number" && value / 1000}K
          {typeof value === "string" && value}
        </h1>
        <p className={cn("text-sm", tagLineColorClass)}>{tagline}</p>
      </div>
    </div>
  );
};

export default MetricCard;
