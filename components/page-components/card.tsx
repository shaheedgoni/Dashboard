import { CardDetailsProps } from "@/types/CardDetailsTypes";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

export default function Card({ title, stats, isRise }: CardDetailsProps) {
  return (
    <div className="bg-white border-2 border-gray-300 p-5 rounded-2xl shadow">
      <div className="flex justify-between">
        <p>{title}</p>
        <div
          className={`${isRise ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"} flex items-center gap-1 text-sm  py-1 px-2 rounded-full`}
        >
          {isRise ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
          <p>Trend</p>
        </div>
      </div>
      <p className="text-4xl font-bold">{stats}</p>
    </div>
  );
}
