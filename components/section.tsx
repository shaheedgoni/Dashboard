import { ReactNode } from "react";

export default function Section({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-stone-100 p-8 min-h-[calc(100vh-64px)] font-roboto">
      <h1 className="font-semibold text-4xl mb-6">{title}</h1>
      {children}
    </div>
  );
}
