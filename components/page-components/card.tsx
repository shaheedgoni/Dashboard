import { ReactNode } from "react";

export default function Card({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-white border-2 w-full border-gray-300 p-5 rounded-2xl shadow">
      {children}
    </div>
  );
}
