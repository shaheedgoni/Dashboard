import Card from "@/components/page-components/card";
import { reportCardProps } from "@/types/CardDetailsTypes";

export default function ReportCard({ icon, label, value }: reportCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>
          <p>{label}</p>
          <p className="text-4xl font-bold">{value}</p>
        </div>
      </div>
    </Card>
  );
}
