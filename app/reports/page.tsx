import { reportCardDetails } from "./reportContent";
import Section from "@/components/section";
import ReportCard from "./reportCard";
import Table, { TableRowProps } from "@/components/page-components/table";
import { Panel, SearchBar } from "@/components/page-components/ui/ui";

const reportsTableHead: string[] = [
  "Report name",
  "Type",
  "Date range",
  "Status",
  "",
];

const reportRowContent: TableRowProps[] = [
  {
    columns: [
      { type: "profilePicture", value: "Weekly Revenue Summary" },
      "Weekly User Activity",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Ready", pillColor: "green" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Monthly Revenue Summary" },
      "Monthly Revenue Summary",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Processing", pillColor: "yellow" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Report: User Activity" },
      "Monthly Revenue Summary",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Ready", pillColor: "green" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Report Report Summary" },
      "Custom Date Conversion",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Ready", pillColor: "green" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Report User Revenue Summary" },
      "Weekly User Activity",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Processing", pillColor: "yellow" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Report User Activity" },
      "Custom Date Conversion",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Scheduled", pillColor: "gray" },
      { type: "action" },
    ],
  },
  {
    columns: [
      { type: "profilePicture", value: "Report User Activity" },
      "Custom Date Conversion",
      "Oct 1 - Oct 31, 2023",
      { type: "pills", value: "Scheduled", pillColor: "gray" },
      { type: "action" },
    ],
  },
];

export default function Reports() {
  return (
    <Section title="Reports">
      <div className="w-full gap-3 flex flex-col">
        <div className="flex gap-3 w-full">
          {reportCardDetails.map((entry, index) => (
            <ReportCard
              key={index}
              icon={entry.icon}
              label={entry.label}
              value={entry.value}
            />
          ))}
        </div>

        <Panel>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl">All Users</h2>
            <div className="flex gap-3">
              <select className="py-2 px-3 rounded-full border-gray-300 bg-gray-50 border-2 ">
                <option>Type</option>
                <option>Data Range</option>
                <option>Status</option>
              </select>

              <SearchBar />
            </div>
          </div>

          <Table
            headerContent={reportsTableHead}
            rowContent={reportRowContent}
          />
        </Panel>
      </div>
    </Section>
  );
}
