"use client";

import { barChartDetails, cardDetails } from "./overviewContent";
import Card from "@/components/page-components/card";
import Panel from "@/components/page-components/panel";

export default function Overview() {
  return (
    <div className="bg-stone-100 h-260 p-8 font-roboto">
      <h1 className="font-semibold text-4xl mb-6">Overview</h1>

      <div className="w-full gap-3 flex flex-col">
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

        <div className="flex gap-3">
          <Panel
            content={
              <div className="flex gap-4 justify-center">
                {barChartDetails.map((chart, index) => {
                  return (
                    <div
                      key={index}
                      className="w-20 h-75 bg-sky-400 rounded-t-xl"
                    />
                  );
                })}
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
