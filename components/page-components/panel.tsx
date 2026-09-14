import { PanelProps } from "@/types/panelTypes";

export default function Panel({ content, flex }: PanelProps) {
  return (
    <div
      className={`bg-white border-2 ${flex} border-gray-300 p-6 rounded-2xl shadow`}
    >
      {content}
    </div>
  );
}
