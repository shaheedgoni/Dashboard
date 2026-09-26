"use client";
import { FaRegBell } from "react-icons/fa";
import { notificationProps } from "@/types/notificationProps";
import { LuSun } from "react-icons/lu";
import { PrimaryButton, SearchBar } from "./page-components/ui/ui";

export default function Header({
  displayNotification,
  setDisplayNotification,
}: notificationProps) {
  function runNotification() {
    if (!displayNotification) {
      setDisplayNotification(true);
    } else {
      setDisplayNotification(false);
    }
  }
  return (
    <header className="flex justify-between top-0 left-60 right-0 h-16 border-b border-stone-300 bg-white items-center fixed p-5 z-10">
      <h1>Dashboard</h1>

      <div className="flex gap-5 items-center">
        <SearchBar />

        <PrimaryButton>
          <LuSun size={30} />
        </PrimaryButton>

        <PrimaryButton onClick={runNotification}>
          <FaRegBell size={25} />
          <div className="bg-red-600 text-white text-[10px] justify-center items-center flex rounded-full h-5 w-5 absolute top-0 right-0 border-2 border-white transition">
            2
          </div>
        </PrimaryButton>
      </div>
    </header>
  );
}
