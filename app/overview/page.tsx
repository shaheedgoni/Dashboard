"use client";

import {
  barChartDetails,
  cardDetails,
  pieChartDetails,
} from "./overviewContent";
import Card from "@/components/page-components/card";
import Panel from "@/components/page-components/panel";

export default function Overview() {
  const maxValue = Math.max(...barChartDetails.map((item) => item.value), 1);

  const pieOne = String(pieChartDetails[0].percentage);
  const pieTwo = String(pieChartDetails[1].percentage);

  console.log(pieOne, pieTwo);

  return (
    <div className="bg-stone-100 p-8 h-610 font-roboto">
      <h1 className="font-semibold text-4xl mb-6">Overview</h1>

      <div className="w-full gap-4 flex flex-col">
        <div className="grid grid-cols-4 gap-3">
          {cardDetails.map((card, index) => {
            return (
              <Card
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
          <Panel
            content={
              <div className="flex flex-col w-full pt-4">
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
            }
            flex="flex-2"
          />

          <Panel
            content={
              <div className="h-full flex items-center justify-center">
                <div
                  style={{
                    background: `conic-gradient(#0284c7 0% ${pieOne}%, #38bdf8 ${pieOne}% ${pieTwo}%, #e5e7eb ${pieTwo}% 100%)`,
                  }}
                  className="h-72 w-72 rounded-full"
                />
              </div>
            }
            flex="flex-1"
          />
        </div>
      </div>
    </div>
  );
}
