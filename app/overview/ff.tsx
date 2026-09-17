"use client";

import { barChartDetails, cardDetails } from "./overviewContent";
import Card from "@/components/page-components/card";
import Panel from "@/components/page-components/panel";

export default function Overview() {
  // Find the max value in the dataset to calculate heights dynamically relative to 100%
  const maxValue = Math.max(...barChartDetails.map((item) => item.value), 1);

  return (
    <div className="bg-stone-100 min-h-screen p-8 font-roboto">
      <h1 className="font-semibold text-4xl mb-6">Overview</h1>

      <div className="w-full gap-4 flex flex-col">
        {/* Top Cards Grid */}
        <div className="grid grid-cols-4 gap-3">
          {cardDetails.map((card, index) => {
            return (
              <Card
                isRise={card.isRise}
                title={card.title}
                stats={card.stats}
                key={index}
              />
            );
          })}
        </div>

        {/* Charts & Panels Section */}
        <div className="flex gap-3">
          <Panel
            content={
              <div className="flex flex-col gap-2 w-full pt-4">
                {/* Bars Area */}
                <div className="flex justify-around items-end h-64 px-4">
                  {barChartDetails.map((chart, index) => {
                    const heightPercentage = (chart.value / maxValue) * 100;

                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col items-center h-full justify-end w-12"
                      >
                        {/* Value Tooltip on Hover */}
                        <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded shadow pointer-events-none">
                          {chart.value}
                        </span>

                        {/* Bar element dynamically scaled */}
                        <div
                          className="w-full bg-sky-500 rounded-t-xl transition-all duration-300 hover:bg-sky-600"
                          style={{ height: `${heightPercentage}%` }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* X-Axis Divider */}
                <div className="h-[1px] w-full bg-gray-200" />

                {/* Labels Area (Perfectly aligned beneath the bars) */}
                <div className="flex justify-around px-4">
                  {barChartDetails.map((date, index) => {
                    return (
                      <p
                        key={index}
                        className="w-12 text-center text-sm font-medium text-gray-600"
                      >
                        {date.label}
                      </p>
                    );
                  })}
                </div>
              </div>
            }
            flex="flex-2"
          />

          <Panel content={<div className=""></div>} flex="flex-1" />
        </div>
      </div>
    </div>
  );
}
