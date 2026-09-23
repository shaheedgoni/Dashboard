import { totalUsersSparkline } from "@/app/overview/overviewContent";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

export default function SparkLine() {
  return (
    <div className="h-15 w-full">
      <ResponsiveContainer>
        <AreaChart data={totalUsersSparkline}>
          <defs>
            <linearGradient id="sparklineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#87CEEB"
            strokeWidth={2}
            fill="url(#sparklineFill)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
