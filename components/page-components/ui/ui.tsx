import { ReactNode } from "react";
import { PanelProps } from "@/types/panelTypes";
import { primaryButtonProps } from "@/types/primaryButton";
import { LuSearch } from "react-icons/lu";

function Card({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-white border-2 w-full border-gray-300 p-5 rounded-2xl shadow">
      {children}
    </div>
  );
}

function Panel({ children, flex }: PanelProps) {
  return (
    <div
      className={`bg-white border-2 ${flex} border-gray-300 p-6 rounded-2xl shadow`}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ onClick, children }: primaryButtonProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer outline-2 outline-transparent hover:bg-gray-100 hover:outline-gray-300 active:bg-gray-200 transition-all"
    >
      {children}
    </div>
  );
}

function TextButton({
  children,
  backgroundColor,
  color,
}: {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
}) {
  return (
    <button
      className="px-4 py-3 rounded-lg cursor-pointer hover:opacity-90 active:opacity-75 transition-all duration-75"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {children}
    </button>
  );
}

function SearchBar() {
  return (
    <div className="py-2 px-3 rounded-full border-gray-300 bg-gray-50 border-2 flex items-center gap-2">
      <LuSearch color="#99a1af" />
      <input
        type="search"
        className="placeholder:text-gray-400 placeholder:text-sm outline-none"
        placeholder="Search"
      />
    </div>
  );
}

function ProfileIcon({ size }: { size: number }) {
  return (
    <div
      style={{
        height: size,
        width: size,
        fontSize: `${String(size / 2)}px`,
      }}
      className={`bg-blue-500 text-white justify-center items-center flex rounded-full font-medium shrink-0`}
    >
      S
    </div>
  );
}

function PrimaryInput({
  label,
  placeHolder,
}: {
  label?: string;
  placeHolder?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm tracking-tight">{label}</label>
      <input
        className="border-2 rounded-lg placeholder:text-sm placeholder:tracking-tight px-3 py-3 focus:bg-sky-100 focus:outline-sky-600 transition-colors"
        placeholder={placeHolder}
      />
    </div>
  );
}

export {
  Card,
  Panel,
  PrimaryButton,
  SearchBar,
  ProfileIcon,
  PrimaryInput,
  TextButton,
};
