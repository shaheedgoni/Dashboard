import { PanelProps } from "@/types/panelTypes";

export default function Panel({ content }: PanelProps) {
  return (
    <div className="bg-white border-2 h-100 border-gray-300 p-5 rounded-2xl">
      {content}
    </div>
  );
}
