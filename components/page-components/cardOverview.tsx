import { overviewCardDetailsProps } from "@/types/CardDetailsTypes";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import SparkLine from "./sparkLine";
import Card from "./card";

export default function CardOverview({
  title,
  stats,
  isRise,
  trendPercent,
}: overviewCardDetailsProps) {
  return (
    <Card>
      <div className="flex justify-between">
        <p>{title}</p>
        <div
          className={`${isRise ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"} flex items-center gap-1 text-sm  py-1 px-2 rounded-full`}
        >
          {isRise ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
          <p>{trendPercent}%</p>
        </div>
      </div>
      <p className="text-4xl font-bold">{stats}</p>

      <SparkLine />
    </Card>
  );
}
