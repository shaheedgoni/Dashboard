"use client";

import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

interface HeaderProps {
  displayNotification: boolean;
  setDisplayNotification: (value: boolean) => void;
}

export default function Header({
  displayNotification,
  setDisplayNotification,
}: HeaderProps) {
  function runNotification() {
    if (!displayNotification) {
      setDisplayNotification(true);
    } else {
      setDisplayNotification(false);
    }
  }
  return (
    <header className="flex justify-between top-0 left-60 right-0 h-16 border-b border-stone-300 bg-white/30 backdrop-blur-2xl items-center fixed p-5 z-10">
      <h1>Dashboard</h1>

      <div className="flex gap-5 items-center">
        <div className="py-2 px-3 rounded-full border-gray-300 bg-gray-50 border-2 flex items-center gap-2">
          <LuSearch color="#99a1af" />
          <input
            type="search"
            className="placeholder:text-gray-400 placeholder:text-sm outline-none"
            placeholder="Search"
          />
        </div>

        <div
          onClick={runNotification}
          className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:outline-2 hover:bg-gray-100 hover:outline-gray-300"
        >
          <FaRegBell size={25} />
          <div className="bg-red-600 text-white text-[10px] justify-center items-center flex rounded-full h-5 w-5 absolute top-0 right-0 border border-white transition">
            2
          </div>
        </div>
      </div>
    </header>
  );
}
