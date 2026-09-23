import { reportCardDetails } from "./reportContent";
import Section from "@/components/section";
import ReportCard from "./reportCard";

export default function Reports() {
  return (
    <Section title="Reports">
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
    </Section>
  );
}
