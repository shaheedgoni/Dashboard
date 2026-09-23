"use client";

import CardOverview from "@/components/page-components/cardOverview";
import {
  barChartDetails,
  overviewCardDetails,
  pieChartDetails,
} from "./overviewContent";
import Panel from "@/components/page-components/panel";
import Section from "@/components/section";
import { Cell, Pie, PieChart } from "recharts";

export default function Overview() {
  const maxValue = Math.max(...barChartDetails.map((item) => item.value), 1);

  return (
    <Section title="Overview">
      <div className="w-full gap-4 flex flex-col">
        <div className="grid grid-cols-4 gap-3">
          {overviewCardDetails.map((card, index) => {
            return (
              <CardOverview
                isRise={card.isRise}
                title={card.title}
                stats={card.stats}
                trendPercent={card.trendPercent}
                key={index}
              />
            );
          })}
        </div>

        <div className="flex gap-3">
          <Panel flex="flex-2">
            <div className="flex flex-col w-full  pt-4">
              <div className="flex justify-around relative h-75 px-10">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between px-5">
                  <div className=" border-t-2 border-dashed w-full" />
                  <div className=" border-t-2 border-dashed w-full" />
                  <div className=" border-t-2 border-dashed w-full" />
                  <div className=" border-t-2 border-dashed w-full" />
                  <div className=" border-t-2 border-dashed w-full" />
                </div>

                {barChartDetails.map((chart, index) => {
                  const heightPercentage = (chart.value / maxValue) * 100;

                  return (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center h-full justify-end w-12"
                    >
                      <label
                        className={`absolute mb-${heightPercentage} opacity-0 text-center group-hover:opacity-100 transition-opacity bg-white text-black text-xs px-2 py-1`}
                      >
                        {chart.value}
                      </label>

                      <div
                        className="w-full bg-linear-to-t from-sky-600 to-sky-500 border-t-3 border-t-sky-400 rounded-t-lg duration-200 cursor-pointer hover:from-sky-500 hover:to-sky-400  transition-all"
                        style={{ height: `${heightPercentage}%` }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-around px-10">
                {barChartDetails.map((date, index) => {
                  return (
                    <p
                      key={index}
                      className="w-12 pt-1 text-center text-sm font-medium text-stone-500"
                    >
                      {date.label}
                    </p>
                  );
                })}
              </div>
            </div>
          </Panel>

          <Panel flex="flex-1">
            {" "}
            <div className="flex justify-between gap-10 mt-5 items-center">
              <div className="flex flex-col gap-3">
                {pieChartDetails.map((entry, index) => (
                  <div
                    key={index}
                    className="flex gap-5 justify-between text-gray-600"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      {entry.label}
                    </div>

                    <div className="flex justify-end">{entry.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieChartDetails}
                    innerRadius={70}
                    outerRadius={150}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieChartDetails.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </Section>
  );
}
