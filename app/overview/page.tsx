import { DataTable } from "../payments/data-table";
import { cardDetails } from "./overviewContent";
import Card from "@/components/page-components/card";
import { columns } from "../payments/columns";

export default function Overview() {
  return (
    <div className="bg-stone-100 h-260 p-8  font-sans">
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

        <div className="bg-white border-2 h-100 border-gray-300 p-5 rounded-2xl">
          <p className="mb-3">Recent Activity</p>
          <DataTable
            columns={columns}
            data={[
              {
                id: "728ed52f",
                amount: 100,
                status: "pending",
                email: "m@example.com",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
